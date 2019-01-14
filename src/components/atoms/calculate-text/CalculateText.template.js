export default function() {
  return `
  <div class="a-calculatetext a-calculatetext-positive u-hidden">
    <p class="a-calculatetext__main">You have <span class="a-calculatetext__main--sum-positive"></span> left each month</p>
    <p class="a-calculatetext__subtext">Good job, keep it up! <span class="a-calculatetext__subtext--emoji">🎉</span></p>
  </div>
  <div class="a-calculatetext a-calculatetext-negative u-hidden">
    <p class="a-calculatetext__main">You're spending <span class="a-calculatetext__main--sum-negative"></span> more than you earn each month</p>
    <p class="a-calculatetext__subtext">Try to lower your expenses! <span class="a-calculatetext__subtext--emoji">💸</span></p>
  </div>
  `;
}

// function negativeSum() {
//   return `
//   <div class="a-calculatetext u-hidden">
//     <p class="a-calculatetext__main">You're spending <span class="a-calculatetext__main--sum-negative">$ -2 500</span> over your budget each month</p>
//     <p class="a-calculatetext__subtext">Try to lower your expenses! <span class="a-calculatetext__subtext--emoji">💸</span></p>
//   </div>
//   `;
// }

// export {
//   positiveSum, 
//   negativeSum
// }