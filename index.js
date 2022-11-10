// const root = document.getElementById("root");

// const qSort = (mas) => {
//   if (mas.length < 2) return mas;
//   else {
//     const pivot = mas[0];
//     const greater = [];
//     const less = [];
//     for (let i = 1; i < mas.length; i++) {
//       if (mas[i] <= pivot) {
//         greater.push(mas[i]);
//       } else {
//         less.push(mas[i]);
//       }
//     }
//     return qSort(less) + " " + pivot + " " + qSort(greater);
//   }
// };

// const test = [1, 120, 423, 32, 10, 999, 20];

// console.log(qSort(test));

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

