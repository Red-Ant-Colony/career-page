export type Job = {
  slug: string;
  title: string;
  type: string;
  location: string;
  deadline: string;
  descriptions: string[];
  requirements: string[];
  benefits: string[];
};

export const jobs: Job[] = [
  {
    slug: "java-back-end-developer",
    title: "Java Back End Developer",
    type: "Full Time",
    location: "Yogyakarta",
    deadline: "17/12/2023",
    descriptions: [
      "Melakukan analisa, desain dan pengembangan aplikasi yang sesuai dengan kebutuhan nasabah, bisnis, dan operasional Bank.",
      "Melakukan pengujian sistem baik unit test dan system integration test, untuk memastikan bahwa aplikasi yang dibuat telah dapat digunakan dan terhubung dengan sistem-sistem lainnya yang dibutuhkan.",
      "Melakukan monitoring kinerja, fungsi serta perubahan aplikasi hingga sesuai dengan kebutuhan nasabah, bisnis, dan operasional Bank.",
      "Menyusun dan mengelola dokumentasi terkait dengan pengembangan aplikasi.",
    ],
    requirements: [
      "Pengalaman 2-5 tahun sebagai Back End Developer menggunakan Java (terutama dengan Spring Framework)",
      "Memahami konsep microservice dan API secara mendalam",
      "Familiar dengan database PostgreSQL dan MySQL",
      "Memiliki pengetahuan teknis keamanan software",
      "Terbiasa dengan framework Scrum",
      "Bertanggung jawab, dan mampu bekerja secara mandiri ataupun tim",
      "Terbiasa melakukan code testing, troubleshoot bugs, dan memberikan support teknis aplikasi",
      "Memiliki passion dalam perkembangan teknologi informasi",
    ],
    benefits: ["Gaji IDR 3.000.000 - 10.000.000", "Tunjangan Kinerja (TUKIN)", "BPJS", "dll."],
  },
  {
    slug: "java-middleware-developer",
    title: "Java Middleware Developer",
    type: "Full Time",
    location: "Yogyakarta",
    deadline: "17/12/2023",
    descriptions: [
      "Mengembangkan dan memelihara layanan middleware berbasis Java untuk integrasi sistem internal dan eksternal.",
      "Berkolaborasi dengan tim back end dan front end dalam merancang API yang efisien dan aman.",
    ],
    requirements: [
      "Pengalaman 2+ tahun sebagai Java Developer dengan fokus pada middleware",
      "Memahami message broker (Kafka/RabbitMQ)",
      "Familiar dengan REST dan SOAP API",
    ],
    benefits: ["Gaji kompetitif", "Tunjangan Kinerja", "BPJS", "dll."],
  },
  {
    slug: "mobile-developer",
    title: "Mobile Developer",
    type: "Full Time",
    location: "Yogyakarta",
    deadline: "17/12/2023",
    descriptions: [
      "Mengembangkan aplikasi mobile berkualitas tinggi untuk platform Android dan iOS.",
      "Berkolaborasi dengan tim desain dan back end dalam merancang fitur baru.",
    ],
    requirements: [
      "Pengalaman 2+ tahun mengembangkan aplikasi mobile (Flutter/React Native/Native)",
      "Memahami konsep state management dan arsitektur aplikasi",
    ],
    benefits: ["Gaji kompetitif", "Tunjangan Kinerja", "BPJS", "dll."],
  },
  {
    slug: "web-front-end-developer",
    title: "Web Front End Developer",
    type: "Magang",
    location: "Jakarta",
    deadline: "17/12/2023",
    descriptions: [
      "Membantu pengembangan antarmuka web menggunakan teknologi modern seperti React.",
      "Berkolaborasi dengan tim desain untuk mengimplementasikan UI yang responsif.",
    ],
    requirements: [
      "Memahami HTML, CSS, dan JavaScript",
      "Familiar dengan React atau framework serupa",
    ],
    benefits: ["Uang saku", "Sertifikat magang", "Pengalaman kerja nyata"],
  },
  {
    slug: "business-analyst-product-owner",
    title: "Business Analyst / Product Owner",
    type: "Full Time",
    location: "Yogyakarta",
    deadline: "17/12/2023",
    descriptions: [
      "Menganalisis kebutuhan bisnis dan menerjemahkannya ke dalam dokumentasi produk yang jelas.",
      "Memimpin proses pengembangan produk bersama tim engineering dan desain.",
    ],
    requirements: [
      "Pengalaman 2+ tahun sebagai BA atau PO",
      "Mampu menulis user story dan acceptance criteria",
    ],
    benefits: ["Gaji kompetitif", "Tunjangan Kinerja", "BPJS"],
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    type: "Full Time",
    location: "Kalimantan Utara",
    deadline: "17/12/2023",
    descriptions: [
      "Memimpin strategi produk dari perencanaan hingga peluncuran.",
      "Berkolaborasi dengan tim lintas fungsi untuk mencapai tujuan bisnis.",
    ],
    requirements: [
      "Pengalaman 3+ tahun sebagai Product Manager",
      "Kemampuan analitis dan komunikasi yang baik",
    ],
    benefits: ["Gaji kompetitif", "Tunjangan lokasi", "BPJS"],
  },
  {
    slug: "business-development",
    title: "Business Development",
    type: "Full Time",
    location: "HQ Australia",
    deadline: "17/12/2023",
    descriptions: [
      "Mengembangkan peluang bisnis baru dan menjaga hubungan dengan klien strategis.",
    ],
    requirements: [
      "Pengalaman 3+ tahun di bidang business development",
      "Kemampuan komunikasi bahasa Inggris yang baik",
    ],
    benefits: ["Gaji kompetitif", "Tunjangan internasional", "Asuransi kesehatan"],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}