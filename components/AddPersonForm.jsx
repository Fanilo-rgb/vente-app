"use client"
const AddPersonForm = () => {
  return (
    <div className={"flex flex-col"}>
      <h2 className={"mb-2 mx-auto"}>Ajout d'une personne</h2>
      <form className={"flex flex-col bg-black/10 rounded-3xl p-2 gap-2 w-2xl"}>
        <h3>Details du demandeur</h3>
        <hr/>
        <input
          type={"text"}
          placeholder={"Numéro carte"}
          className={"input"}
        />
        <input
          type={"text"}
          placeholder={"Nom"}
          className={"input"}
        />
        <input
          type={"text"}
          placeholder={"Prenom"}
          className={"input"}
        />
        <div className={"flex gap-2"}>
          <div className={"flex gap-2"}>
          <span className={"input px-3"}>
            Homme
          </span>
            <span className={"input px-3"}>
            Femme
          </span>
          </div>
          <input
            placeholder={"Nationalité"}
            className={"input"}
          />
        </div>
        <div className={"flex gap-2"}>
          <input
            placeholder={"CIN"}
            className={"input"}
          />
          <input
            placeholder={"Téléphone"}
            className={"input"}
          />
        </div>
        <div className={"flex gap-2"}>
          <input
            placeholder={"Adresse"}
            className={"input"}
          />
          <input
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