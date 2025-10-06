//1
class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
//2
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
  }
  
//3 
  const video1 = new Video("JavaScript Basics", "Hiba", 300);
  video1.watch();
  
//4 
  const video2 = new Video("React Tutorial", "Amine", 600);
  video2.watch();

  const videosData = [
    { title: "HTML Crash Course", uploader: "Sara", time: 240 },
    { title: "CSS Flexbox Guide", uploader: "Ali", time: 420 },
    { title: "Node.js Intro", uploader: "Youssef", time: 360 },
    { title: "Async JS Explained", uploader: "Nora", time: 480 },
    { title: "APIs with Express", uploader: "Karim", time: 510 },
  ];
  

  const videoInstances = videosData.map(video => new Video(video.title, video.uploader, video.time));
  

  videoInstances.forEach(v => v.watch());
  