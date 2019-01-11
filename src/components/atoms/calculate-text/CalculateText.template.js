function positiveSum() {
  return `
  <div class="a-calculatetext u-hidden">
    <p class="a-calculatetext__main">You have <span class="a-calculatetext__main--sum-positive">$ 1 350</span> left each month</p>
    <p class="a-calculatetext__subtext">Good job, keep it up! <span class="a-calculatetext__subtext--emoji">🎉</span></p>
  </div>
  `;
}

function negativeSum() {
  return `
  <div class="a-calculatetext u-hidden">
    <p class="a-calculatetext__main">You're spending <span class="a-calculatetext__main--sum-negative">$ -2 500</span> over your budget each month</p>
    <p class="a-calculatetext__subtext">Try to lower your expenses! <span class="a-calculatetext__subtext--emoji">💸</span></p>
  </div>
  `;
}

export {
  positiveSum, 
  negativeSum
}