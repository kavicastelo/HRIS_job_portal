import {JobAdModel} from "../data-models/JobAd.model";

export var jobAdDataStrore: JobAdModel[] = [
  {
    id: "1",
    companyId: "1",
    companyName: "Facebook",
    companyLogo: "data:image/png;base64,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",
    companyLevel: "1",
    category: "information technology",
    title: "Web Developer",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam.\nlorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    responsibilities: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    requirements: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    experience: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    education: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    skills: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    totalOpenings: "5",
    jobBanner: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmmt7v7lw5dvo7hlo3pof.jpg",
    employeeType: "Full Time",
    location: "London, UK",
    jobType: "Web Developer",
    exShortDesc: "2+ Years",
    eduShortDesc: "MSC",
    minSalary: "3000",
    maxSalary: "4000",
    datePosted: "Sat Sep 07 2024 07:42:48 GMT+0000",
    expiryDate: "Sat Sep 21 2024 07:42:48 GMT+0000",
    url: "https://www.facebook.com",
  },
  {
    id: "2",
    companyId: "2",
    companyName: "Google",
    companyLogo: "https://jobstack-shreethemes.vercel.app/static/media/google-logo.28878765ba39f327cf3e.png",
    companyLevel: "1",
    category: "information technology",
    title: "Web Developer",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    responsibilities: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    requirements: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    experience: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    education: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    skills: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    totalOpenings: "5",
    jobBanner: "",
    employeeType: "Full Time",
    location: "London, UK",
    jobType: "Web Developer",
    exShortDesc: "2+ Years",
    eduShortDesc: "MSC",
    minSalary: "3000",
    maxSalary: "4000",
    datePosted: "Sat Sep 07 2024 07:42:48 GMT+0000",
    expiryDate: "Sat Sep 21 2024 07:42:48 GMT+0000",
    url: "https://www.google.com"
  },
  {
    id: "3",
    companyId: "3",
    companyName: "Spotify",
    companyLogo: "data:image/png;base64,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",
    companyLevel: "0",
    category: "information technology",
    title: "Web Developer",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    responsibilities: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    requirements: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    experience: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    education: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    skills: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    totalOpenings: "5",
    jobBanner: "",
    employeeType: "Full Time",
    location: "London, UK",
    jobType: "Web Developer",
    exShortDesc: "2+ Years",
    eduShortDesc: "MSC",
    minSalary: "3000",
    maxSalary: "4000",
    datePosted: "Sat Sep 07 2024 07:42:48 GMT+0000",
    expiryDate: "Sat Sep 21 2024 07:42:48 GMT+0000",
    url: "https://www.amazon.com"
  },
  {
    id: "4",
    companyId: "1",
    companyName: "Facebook",
    companyLogo: "data:image/png;base64,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",
    companyLevel: "1",
    category: "information technology",
    title: "Web Developer",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    responsibilities: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    requirements: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    experience: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    education: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    skills: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    totalOpenings: "5",
    jobBanner: "",
    employeeType: "Full Time",
    location: "London, UK",
    jobType: "Web Developer",
    exShortDesc: "2+ Years",
    eduShortDesc: "MSC",
    minSalary: "3000",
    maxSalary: "4000",
    datePosted: "Sat Sep 07 2024 07:42:48 GMT+0000",
    expiryDate: "Sat Sep 21 2024 07:42:48 GMT+0000",
    url: "https://www.facebook.com"
  },
  {
    id: "5",
    companyId: "2",
    companyName: "Google",
    companyLogo: "https://jobstack-shreethemes.vercel.app/static/media/google-logo.28878765ba39f327cf3e.png",
    companyLevel: "1",
    category: "information technology",
    title: "Web Developer",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    responsibilities: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    requirements: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    experience: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    education: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    skills: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    totalOpenings: "5",
    jobBanner: "",
    employeeType: "Full Time",
    location: "London, UK",
    jobType: "Web Developer",
    exShortDesc: "2+ Years",
    eduShortDesc: "MSC",
    minSalary: "3000",
    maxSalary: "4000",
    datePosted: "Sat Sep 07 2024 07:42:48 GMT+0000",
    expiryDate: "Sat Sep 21 2024 07:42:48 GMT+0000",
    url: "https://www.google.com"
  },
  {
    id: "6",
    companyId: "2",
    companyName: "Google",
    companyLogo: "https://jobstack-shreethemes.vercel.app/static/media/google-logo.28878765ba39f327cf3e.png",
    companyLevel: "1",
    category: "information technology",
    title: "Web Developer",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    responsibilities: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    requirements: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    experience: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    education: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    skills: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam. ",
    totalOpenings: "5",
    jobBanner: "",
    employeeType: "Full Time",
    location: "London, UK",
    jobType: "Web Developer",
    exShortDesc: "2+ Years",
    eduShortDesc: "MSC",
    minSalary: "3000",
    maxSalary: "4000",
    datePosted: "Sat Sep 07 2024 07:42:48 GMT+0000",
    expiryDate: "Sat Sep 21 2024 07:42:48 GMT+0000",
    url: "https://www.google.com"
  }
]
