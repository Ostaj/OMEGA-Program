// DATABASE

const certificates = {

  "16251305": {
    name: "Chuleswari Deep",
    rank: "S Rank",
    file: "Chuleswari Deep - OMEGA Program Certificate.pdf"
  },

  "00180602": {
    name: "Manisha Kumar",
    rank: "A Rank",
    file: "Manisha Kumar - OMEGA Program Certificate.pdf"
  },

  "14010113": {
    name: "Ajit Deep",
    rank: "A Rank",
    file: "Ajit Deep - OMEGA Program Certificate.pdf"
  },

  "08090502": {
    name: "Urmila Behera",
    rank: "B Rank",
    file: "Urmila Behera - OMEGA Program Certificate.pdf"
  },

  "06000511": {
    name: "Simran Bharasagar",
    rank: "B Rank",
    file: "Simran Bharasagar - OMEGA Program Certificate.pdf"
  }

};

// VERIFY FUNCTION

function verifyCertificate(){

  const input = document
    .getElementById("certificateInput")
    .value
    .trim();

  const resultBox = document.getElementById("resultBox");

  resultBox.style.display = "block";

  resultBox.className = "result";
  resultBox.classList.add("validating");

  // LOADING ANIMATION

  let dots = 0;

  resultBox.innerHTML = `

  <strong>
    Initializing Verification
  </strong>

  <br><br>

  Validating Certificate ID

`;

const loadingAnimation = setInterval(() => {

  dots = (dots + 1) % 5;

  resultBox.innerHTML = `

    <strong>
      Initializing Verification
    </strong>

    <br><br>

    Connecting to Server${".".repeat(dots)}

    <br><br>

    

  `;

},500);

  // VALIDATION

  if(!/^\d{8}$/.test(input)){

    setTimeout(() => {

      clearInterval(loadingAnimation);

      resultBox.classList.add("failed");

      resultBox.innerHTML = `
        <strong>Verification Failed</strong><br><br>

        Certificate ID must be numeric and 8 characters long.
      `;

    },5000);

    return;
  }

  // DATABASE CHECK

  setTimeout(() => {

    clearInterval(loadingAnimation);

    if(certificates[input]){

      const data = certificates[input];

      resultBox.classList.add("success");

      resultBox.innerHTML = `

        <strong>
          Verification Successful
        </strong>

        <br><br>

        Certificate ID:
        ${input}

        <br>

        Awarded to:
        ${data.name}

        <br>

        Performance:
        ${data.rank}

        <div class="download-box">

          <a class="download-btn"
             href="${data.file}"
             download>

            Download Certificate

          </a>

        </div>

      `;

    }

    else{

      resultBox.classList.add("failed");

      resultBox.innerHTML = `

        <strong>
          Verification Failed
        </strong>

        <br><br>

        There is no record with this Certificate ID.

      `;

    }

  },5000);

}