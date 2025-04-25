"use client"
import {useState} from "react";
import { useRouter } from "next/navigation";

const AddPersonForm = () => {
  const router = useRouter()

  const [number_card, setNumber_card] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [CIN, setCIN] = useState("-");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postal_code, setPostal_code] = useState("");

  const handleName = (e) => {
    const name = e.target.value;
    const newName = name.toUpperCase();
    setName(newName);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!number_card || !name || !surname || !gender || !nationality || !phone) {
      alert("Veuillez entre au moins : le nom, prenom, le numéro de la carte, le genre, la nationalité, et le numéro de téléphone")
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/distributors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({number_card, name, surname, gender, nationality, CIN, phone, address, postal_code}),
      })

      if (res.ok) {
        setNumber_card("");
        setName("");
        setSurname("");
        setGender("");
        setNationality("");
        setCIN("-");
        setPhone("");
        setAddress("");
        setPostal_code("");
        router.refresh();
      }

    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={"flex flex-col"}>
      <h2 className={"mb-2 mx-auto"}>Ajout d'une personne</h2>
      <form onSubmit={handleSubmit} className={"flex flex-col bg-black/10 rounded-3xl p-2 gap-2 w-2xl"}>
        <h3>Details du demandeur</h3>
        <hr/>
        <input
          onChange={e => setNumber_card(e.target.value)}
          value={number_card}
          type={"text"}
          placeholder={"Numéro carte"}
          className={"input"}
        />
        <input
          onChange={handleName}
          value={name}
          type={"text"}
          placeholder={"Nom"}
          className={"input"}
        />
        <input
          onChange={e => setSurname(e.target.value)}
          value={surname}
          type={"text"}
          placeholder={"Prenom"}
          className={"input"}
        />
        <div className={"flex gap-2"}>
          <div className={"flex gap-2"}>
          <span
            className={`input px-3 transition-all cursor-pointer ${gender === "male" && "bg-cyan-300 text-gray-700"}`}
            onClick={() => setGender("male")}
          >
            Homme
          </span>
          <span
            className={`input px-3 transition-all cursor-pointer ${gender === "female" && "bg-pink-300 text-gray-700"}`}
            onClick={() => setGender("female")}
          >
            Femme
          </span>
          </div>
          <input
            onChange={e => setNationality(e.target.value)}
            value={nationality}
            placeholder={"Nationalité"}
            className={"input"}
          />
        </div>
        <div className={"flex gap-2"}>
          <input
            onChange={e => setCIN(e.target.value)}
            value={CIN}
            placeholder={"CIN"}
            className={"input"}
          />
          <input
            onChange={e => setPhone(e.target.value)}
            value={phone}
            placeholder={"Téléphone"}
            className={"input"}
          />
        </div>
        <div className={"flex gap-2"}>
          <input
            onChange={e => setAddress(e.target.value)}
            value={address}
            placeholder={"Adresse"}
            className={"input"}
          />
          <input
            onChange={e => setPostal_code(e.target.value)}
            value={postal_code}
            placeholder={"Code postal"}
            className={"input max-w-32"}
          />
        </div>
        <button type="submit" className={"btn"}>Ajouter</button>
      </form>
    </div>
  )
}
export default AddPersonForm
