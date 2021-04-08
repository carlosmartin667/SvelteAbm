<script>
  export let name;
  let Personas = [];
  let persona = {
    Id: 1,
    Nombre: "",
    Apellido: "cornejo",
    Sexo: true,
    Edad: "21",
  };

  const addpersonas = () => {
    if (!persona.Nombre.trim()) {
      console.log("texto vacio");
      persona.texto = "";
      return;
    } else {
      console.log(persona.Nombre);
    }
    Personas = [...Personas, persona];
    console.log(Personas);
    persona = {
      Id: 1,
      Nombre: "",
      Apellido: "cornejo",
      Sexo: true,
      Edad: "21",
    };
  };
</script>

<main>
  <div class="container">
    <form on:submit|preventDefault={addpersonas}>
      <input
        type="text"
        class="form-control"
        placeholder="agregar"
        bind:value={persona.Nombre}
      />
      <input
        type="text"
        class="form-control"
        placeholder="agregar"
        bind:value={persona.Apellido}
      />
      <input
        type="text"
        class="form-control"
        placeholder="agregar"
        bind:value={persona.Sexo}
      />
      <input
        type="text"
        class="form-control"
        placeholder="agregar"
        bind:value={persona.Edad}
      />
      <button on:click={addpersonas}> agregar</button>
    </form>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Sexo</th>
          <th scope="col">Edad</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {#each Personas as item}
        <tr>
          <th scope="row">1</th>
          <td>{item.Nombre}</td>
          <td>{item.Apellido}</td>
          <td>{item.Sexo}</td>
          <td>{item.Edad}</td>
          <td>
            <button class="btn btn-sm btn-warning">
              <i class="bi bi-check2" />
            </button>
            <button>
              <i class="bi bi-trash" />
            </button>
          </td>
        </tr>
        {/each}
        
      </tbody>
    </table>
  </div>
</main>

<style>
</style>
