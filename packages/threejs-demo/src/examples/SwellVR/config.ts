export const spacesConfig = [
  {
    id: 'space1',
    tips: [
      {
        id: '1',
        position: {x: 0, y: -10, z: 40},
        content: {
          title: '坐骑',
          content: '文本描述',
        },
      },
      {
        id: '2',
        position: {x: -10, y: -6, z: 40},
        textureUrl:
          'https://m.360buyimg.com/babel/jfs/t1/125314/12/31594/6260/6339b149E14068522/5c0d35a3e149936a.png',
        targetSpaceId: 'space2',
        content: {
          title: '去客厅',
          content: '走吧',
        },
      },
    ],
    cubeSpaceTextureUrls: {
      // 立方体贴图，分别为：背侧、下侧、前侧、左侧、右侧、上侧，必须
      // back: './assets/XIMA/back.JPG',
      // down: './assets/XIMA/down.JPG',
      // front: './assets/XIMA/front.JPG',
      // left: './assets/XIMA/left.JPG',
      // right: './assets/XIMA/right.JPG',
      // up: './assets/XIMA/up.JPG'
      back: 'https://m.360buyimg.com/babel/jfs/t1/40814/31/19646/41953/63398297E0707fe35/4e831e60cf579899.jpg',
      down: 'https://m.360buyimg.com/babel/jfs/t1/43941/23/19369/84038/633982d7E838acd9a/9e7a89cc910d3409.jpg',
      front:
        'https://m.360buyimg.com/babel/jfs/t1/150573/35/27827/113528/633982faE8556c0c0/b455284fd91885c6.jpg',
      left: 'https://m.360buyimg.com/babel/jfs/t1/189204/25/29491/61430/63398310E3c180e43/26d9b459cf714f9f.jpg',
      right:
        'https://m.360buyimg.com/babel/jfs/t1/184948/34/28448/131232/63398323E61ff80fb/89ab84eda0421260.jpg',
      up: 'https://m.360buyimg.com/babel/jfs/t1/86258/24/33602/70616/63398334Ea2dcf448/e2f5c275792fb3d6.jpg',
    },
  },
  {
    id: 'space2',
    tips: [
      {
        id: '3',
        position: {x: -2, y: -25, z: 40},
        content: {
          title: '香奈儿垃圾桶',
          content: '里面装着主人不用的奢侈品',
        },
      },
      {
        id: '4',
        position: {x: -20, y: 0, z: 40},
        content: {
          title: '宇宙牌冰箱',
          content: '装着超级多零食',
        },
      },
      {
        id: '5',
        textureUrl:
          'https://m.360buyimg.com/babel/jfs/t1/125314/12/31594/6260/6339b149E14068522/5c0d35a3e149936a.png',
        targetSpaceId: 'space1',
        position: {
          x: -8,
          y: 0,
          z: -40,
        },
        content: {
          title: '去门口',
          content: '一起去门口吧',
        },
      },
    ],
    cubeSpaceTextureUrls: {
      back: 'https://m.360buyimg.com/babel/jfs/t1/48117/28/21445/120448/63398366Ede81497b/a46e362df5f7d0ed.jpg',
      down: 'https://m.360buyimg.com/babel/jfs/t1/101209/24/26762/106253/63398376Eedb0db22/4f335c4ecd72ad74.jpg',
      front:
        'https://m.360buyimg.com/babel/jfs/t1/154056/6/26449/110652/63398388E8ecda044/22e1646534839a95.jpg',
      left: 'https://m.360buyimg.com/babel/jfs/t1/198990/28/28201/74687/6339839aE28806a5e/43b311d3379397df.jpg',
      right:
        'https://m.360buyimg.com/babel/jfs/t1/209711/14/25233/92186/633983b0E8f4df687/750ba84061ea64a6.jpg',
      up: 'https://m.360buyimg.com/babel/jfs/t1/186545/35/29054/29678/633983c2E72ef4848/92043b945a03fc29.jpg',
    },
  },
]
