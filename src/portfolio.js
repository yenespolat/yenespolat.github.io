const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'void',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Yasin Enes',
  role: 'Full Stack Yazılım Geliştiricisiyim',
  description:
    'Şu anda TAI\'de Yazılım Tasarım Mühendisi olarak çalışıyorum. Aynı zamanda da İTÜ\'de Bilgisayar Mühendisliği Yüksek Lisansı\'na devam ediyorum.',
  resume: '#',
  social: {
    linkedin: 'https://www.linkedin.com/in/yasinenes/',
    github: 'https://github.com/yenespolat',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Chakra UI',
  'Ant Design',
  'Git',
  'CI/CD',
  'Python',
  'C',
  'C++',
  'Java'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yasinenes0129@mail.com',
}

export { header, about, projects, skills, contact }
