export async function getwarningDetails(warningId) {
    const dataSet = {
      '1': {
        stats: 'fire',
        image: '../images/Logo1.png',
        video: 'video',
        date: '2021-09-20'
      },
      '2': {
        stats: 'fight',
        image: '../images/Logo2.png',
        video: 'Lorem ipsum dolor sit amet 2',
        date: '2021-09-17'
      },
      '3': {
        stats: 'fight',
        image: '../images/Logo.png',
        video: 'Lorem ipsum dolor sit amet 3',
        date: '2021-09-17'
      },
      '4': {
        stats: 'fire',
        image: '../images/Logo2.png',
        video: 'Lorem ipsum dolor sit amet 4',
        date: '2021-09-17'
      },
      '5': {
        stats: 'fight',
        image: '../images/Logo1.png',
        video: 'Lorem ipsum dolor sit amet 5',
        date: '2021-09-14'
      },
      '6': {
        stats: 'fight',
        image: '../images/Logo2.png',
        video: 'Lorem ipsum dolor sit amet 6',
        date: '2021-09-14'
      }
    }
    return dataSet[warningId]
  }

  export async function getwarningIdList() {
    return [{
      params: {
        id: '1'
      }
    }, {
      params: {
        id: '2'
      }
    }, {
      params: {
        id: '3'
      }
    }, {
      params: {
        id: '4'
      }
    }, {
      params: {
        id: '5'
      }
    }, {
      params: {
        id: '6'
      }
    }]
  }