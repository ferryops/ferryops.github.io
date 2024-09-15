const web = {
  name: "Ferry Ananda Febian",
  description: "Portfolio Ferry Ananda Febian",
  navigationItem: [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Tentang",
      href: "/tentang",
    },
  ],
  socialMedia: [
    {
      name: "Github",
      href: "https://github.com/ferryops",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/ferryanandafebian/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/fferryaf/",
    },
  ],
  workExperienceItem: [
    {
      id: 1,
      icon: "/logo/minergo.svg",
      title: "Full Stack Developer",
      company: "PT Minergo Visi Maxima",
      location: "Balikpapan, Indonesia",
      date: "Agustus 2023 - Sekarang",
      description: "Full Time",
      details: [
        "Membuat dashboard dispatch untuk manajemen dan monitoring armada hauler serta laporan aktivitas pertambangan.",
        "Mengintegrasikan berbagai layanan IoT ke website (kamera live streaming, websocket event driver, history perjalanan driver dan laporan aktivitas lainnya).",
        "Melakukan riset telematika dan IoT untuk industri pertambangan.",
        "Melakukan deployment proyek di PT. Borneo Indobara mulai dari Proof of Concept, integrasi dengan produk yang sedang berjalan hingga rilis.",
        "Teknologi yang digunakan: React.js, Express.js, Node.js, MySQL",
      ],
    },
    {
      id: 2,
      icon: "/logo/mka.jpeg",
      title: "Full Stack Developer",
      company: "PT Media Kreasi Abadi",
      location: "Balikpapan, Indonesia",
      date: "Februari 2022 - Juni 2023",
      description: "Internship",
      details: [
        "Berkesempatan magang dalam program kampus merdeka batch 4 Kemendikbudristek.",
        "Membuat user interface dengan React.js dan Native CSS.",
        "Merancang skema database untuk aplikasi project management.",
        "Membuat Restful API dengan Next.js dan database PostgreSQL.",
        "Memanfaatkan proses CI/CD untuk efisiensi deployment dengan Vercel.",
      ],
    },
    {
      id: 3,
      icon: "/logo/kominfo.png",
      title: "Cyber Security Analyst",
      company: "Kominfo",
      location: "Jakarta, Indonesia",
      date: "April 2022 - Juli 2022",
      description: "Internship",
      details: [
        "Berkesempatan magang dalam program kampus merdeka batch 3 Kemendikbudristek.",
        "Menganalisis jaringan komputer skala kecil dan menengah.",
        "Merancang jaringan komputer skala besar.",
        "Mengevaluasi peringatan keamanan dengan SIEM.",
        "Menerbitkan artikel ilmiah.",
        "Mengikuti sertifikasi Cisco Certified Network Associate (CCNA).",
      ],
    },
    {
      id: 4,
      icon: "/logo/telkom.png",
      title: "Backend Developer",
      company: "PT Telkom Regional VI Kalimantan",
      location: "Balikpapan, Indonesia",
      date: "Jan 2022 - Present",
      description: "Internship",
      details: [
        "Berkesempatan magang dalam program Digitalent Regional Internship batch 3.",
        "Belajar dan membuat dashboard website dengan PHP, HTML dan CSS.",
        "Belajar dan membuat bot telegram dengan PHP Native dan mengintegrasikan bot dengan database MySQL.",
      ],
    },
  ],
};

export default web;
