export default function() {
  return `
    <div class="input-group mb-3 d-flex">
      <div class="input-group-prepend w-75">
        <p class="font-weight-bold w-100 text-right pr-2 pt-2">TOTAL:</p>
      </div>
      <input type="text" class="form-control text-right" placeholder="kr"  aria-label="Sum input" aria-describedby="inputGroup-sizing-default" disabled>
    </div>
  `;
}