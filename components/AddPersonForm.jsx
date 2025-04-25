"use client"
const AddPersonForm = () => {
  return (
    <div>
      <h2>Ajout d'une personne</h2>
      <form className={"flex flex-col bg-black/10 rounded-3xl p-2 gap-2 w-lg"}>
        <input
          placeholder={"Nom complet"}
          className={"input"}
        />
        <input
          placeholder={"Numéro carte"}
          className={"input"}
        />
        <input
          placeholder={"Numéro téléphone"}
          className={"input"}
        />
        <button type="submit" className={"btn"}>Ajouter</button>
      </form>
    </div>
  )
}
export default AddPersonForm
