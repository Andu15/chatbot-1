const btnReturn = () => {

  const handleRoute = (e) => {
    console.log(e.target);
  }

  return (
    <section>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-link" onClick={handleRoute}>¿Quieres consultar otro producto?</button>
        </div>
      </div>
    </section>
  )
}

export default btnReturn;
