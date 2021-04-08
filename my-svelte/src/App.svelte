<script>
  export let name;
  let Personas = [];
  let persona = {
    Id: 0,
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
    var i = (persona.Id += 1);
    Personas = [...Personas, persona];
    console.log(Personas);
    persona = {
      Id: i,
      Nombre: "",
      Apellido: "cornejo",
      Sexo: true,
      Edad: "21",
    };
  };

  const eliminarPersona = (Id) => {
    Personas = Personas.filter((item) => item.Id != Id);
  };

  const editarPersona = (Id) => {
    Personas = Personas.map((item) => {
      if (item.Id === Id) {
        console.log("si hay");
        console.log(Personas[Id-1]);
        persona.Nombre = Personas[Id-1].Nombre;
        console.log(persona.Nombre);
        return persona
      } else {
        console.log("no hay");
      }
    });
  };
</script>

<main>
  <div class="container">
    <div class="text-center">
      <h1>hola mundo</h1>
      <h3>abm agregar persona</h3>
    </div>
    <br />
    <form on:submit|preventDefault={addpersonas}>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Nombre : </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="agregar"
          bind:value={persona.Nombre}
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Apellido : </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="agregar"
          bind:value={persona.Apellido}
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Sexo : </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="agregar"
          bind:value={persona.Sexo}
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Edad : </span>
        </div>
        <input
          type="number"
          class="form-control"
          placeholder="agregar"
          bind:value={persona.Edad}
        />
      </div>
      <br />
      <div class="text-center">
        <button on:click={addpersonas}> agregar</button>
      </div>
    </form>
    <hr />
    <table class="table table-bordered table-striped">
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
            <th scope="row">{item.Id}</th>
            <td>{item.Nombre}</td>
            <td>{item.Apellido}</td>
            <td>{item.Sexo}</td>
            <td>{item.Edad}</td>
            <td>
              <button
                class="btn btn-sm btn-warning"  data-bs-toggle="modal"  data-bs-target="#exampleModal"
                on:click={editarPersona(item.Id)}
              >
                editar
                <i class="bi bi-check2" />
              </button>
              <button
                class="btn btn-sm btn-danger"
                on:click={eliminarPersona(item.Id)}
              >
                eliminar
                <i class="bi bi-trash" />
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
    <!-- Button trigger modal -->
   

    <!-- Modal -->
    <div
      class="modal fade "
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Editar Persona</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div class="modal-body">
            <form on:submit|preventDefault={addpersonas} >
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Nombre : </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="agregar"
                  bind:value={persona.Nombre}
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Apellido : </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="agregar"
                  bind:value={persona.Apellido}
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Sexo : </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="agregar"
                  bind:value={persona.Sexo}
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">Edad : </span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  placeholder="agregar"
                  bind:value={persona.Edad}
                />
              </div>
              <br />
              <div class="text-center">
                <button on:click={addpersonas}> agregar</button>
              </div>
            </form>
          
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">Close</button
            >
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
