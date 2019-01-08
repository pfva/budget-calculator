export default function() {
  return `
  <div class="row justify-content-center">

    <div class="col-12 col-md-8">
      <h3>Step One: Money In</h3>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Salary</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr" aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Benefits</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr" aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Other income</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr"  aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <p class="font-weight-bold w-100 text-right pr-2 pt-2">TOTAL:</p>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr"  aria-label="Sum input" aria-describedby="inputGroup-sizing-default" disabled>
      </div>
    </div>

    <div class="col-12 col-md-8">
      <h3>Step One: Money Out</h3>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Rent</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr" aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Mortgage</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr" aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Electricity</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr"  aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Heating/Water</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr"  aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Insurance</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr"  aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Car/Transport</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr"  aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Leisure</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr"  aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">Savings</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr"  aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>

      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <p class="font-weight-bold w-100 text-right pr-2 pt-2">TOTAL:</p>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr"  aria-label="Sum input" aria-describedby="inputGroup-sizing-default" disabled>
      </div>
    </div>

  </div>
  `;
}