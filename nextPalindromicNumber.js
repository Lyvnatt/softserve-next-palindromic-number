function next_pal(val) {
  for (let i = val +1; true; i++) {
   if ([...String(i)].reverse().join('') == i) {
     console.log(i);
     return i;
   }
  }
 }
 next_pal(11);
 next_pal(188);
 next_pal(191);
 next_pal(2541);