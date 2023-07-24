// Creacting object using constructor mathodes

function Course(
  instructor,
  title,
  description,
  duration,
  fees,
  startDate,
  youtubeLink
) {
  this.instructor = instructor;
  this.title = title;
  this.description = description;
  this.duration = duration;
  this.fees = fees;
  this.startDate = startDate;
  this.youtubeLink = youtubeLink;
}

let Javascript = new Course(
    "Farhaj qureshi",
    "javascript Foundation",
    "javascript Programming course",
    "Hinglish",
    10,
    "Free",
    "23 Aprel 2023"
)

// Delete objects 

delete Javascript.description;

console.log(Javascript);





