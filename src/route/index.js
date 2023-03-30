// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '900$ в месяц',
  address: 'Ukraine, Kyiv',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    linkedin: {
      text: 'linkedin dmytro',
      href: 'linkedin@mail.com',
    },
    
  },
  address: `Ukraine, Kyiv`,
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON даніеш

    page: {
      title: 'Summary',
    },

    header,

    main: {
      salary: '900$ в месяц',
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (                    tournament position, goals etc), analyzing by simple mathematics models and preparing probabilityfor such events like: money line - first win / draw / second win, totals etc`,
      },
      summary: {
        title: 'Summary',
        title2: '2-Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start                    work on a new project I learn the domain and try to understand the idea of the project. Good team                     player, every colleague is a friend to me.`,
      },
    },

    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON даніеш

    page: {
      title: 'My education',
    },

    header,

    main: {
      title: 'My sertificates',

      sertificate: [
        {
          name: 'Sertificat-1',
          ids: 101010,
        },
        {
          name: 'Sertificat-2',
          ids: 202020,
        },
        {
          name: 'Sertificat-3',
          ids: 303030,
        },
      ],

      educations: [
        {
          name: 'Zaklad-1',
          isEnd: false,
        },
        {
          name: 'Zaklad-2',
          isEnd: true,
        },
        {
          name: 'Zaklad-3',
          isEnd: true,
        },
        {
          name: 'Zaklad-4',
          isEnd: false,
        },
      ],
    },

    address: 'text address',

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON даніеш

    layout: `big`,

    page: {
      title: 'My work',
    },

    header,

    main: {
      title: 'My work',

      work: [
        {
          position: 'Middle developer PRO',
          company: {
            name: 'BRAINS IT',
      //     url: `www.it-brains.com`,
url: null,
          },
          duration: {
            from: `10.10.2022`,
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: `Resume`,
              url: `resume.com`,
              about: `See all your registered products, serials and download product installers.`,
              stackAmount: 3,
              stacks: [
                {
                  name: `HTML5`,
                },
                {
                  name: `CSS`,
                },
                {
                  name: `React JS`,
                },
              ],
              awardsAmount: 2,
              awards: [
                {
                  name: `Award-1`,
                },
                {
                  name: `Award-2`,
                },
              ],
            },
          ],
        },
      ],
    },

    address: 'text address',

    footer,
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON даніеш

    page: {
      title: 'Skills',
    },

    header,

    main: {
      hobbies: [
        {
          name: 'Hobbie-1',
          isMain: false,
        },
        {
          name: 'Hobbie-2',
          isMain: true,
        },
        {
          name: 'Hobbie-3',
          isMain: false,
        },
      ],

      skills: [
        {
          name: 'Skill-1',
          point: 10,
          isTop: true,
        },

        {
          name: 'Skill-2',
          point: 0,
          isTop: false,
        },
        {
          name: 'Skill-3',
          point: null,
        },
        {
          name: 'Skill-4',
          point: 7,
          isTop: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: `person`,

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
