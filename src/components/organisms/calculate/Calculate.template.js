export default function() {
  return `
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 p-4 p-md-0">
      ${this.getCalculateButton()}

      ${this.getCalculateText()}
    </div>
  </div>
  `;
}