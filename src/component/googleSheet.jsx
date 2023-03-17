

function SheetForm() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxgcN3hNd4mAKe5rlh63vSK7anuqvD5xOFujzdbuUp8peC5Dd1HjCNjRzACtojLWlGUhA/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google sheet
        in React or Vanilla jS
      </h2>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Email" name="Email" type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}


export default SheetForm