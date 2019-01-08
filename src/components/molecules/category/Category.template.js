export default function() {
  return this.incomeCategoryNames.map(name => {
    return `
      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">${name}</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr" aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>
    `;
  }).join('');
}