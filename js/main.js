// ProgressBar animation

$(".progressBar > span").each(function() {
  $(this)
    .data("origWidth", $(this).width())
    .width(0)
    .animate({
      width: $(this).data("origWidth")
    }, 1200);
});

// Intersection Observer

// var target = document.querySelector('.progressBar > span');
// observer.observe(target);

// function handleIntersect(entries, observer) {
//   entries.forEach(function(entry) {
//     if (entry.intersectionRatio > prevRatio) {
//       entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
//     } else {
//       entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
//     }

//     prevRatio = entry.intersectionRatio;
//   });
// }

