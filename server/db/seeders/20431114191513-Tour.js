/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tours",
      [
        {
          name: "Завораживающий Дагестан",
          body: "Дагестан в Первоклассном Путешествии по Стране гор! В одном туре вы посетите города, памятники истории и культуры и природные чудеса: Махачкала и Дербент, крепость Нарын-Кала,  «страна башен» — селения-призраки  Кахиб и Гоор, Чиркейская ГЭС и водохранилище, Сулакский каньон и знаменитый бархан Сарыкум!",
          description:
            "Первоклассное Путешествие по Стране гор включает в себя увлекательный тур по Дагестану, предлагая участникам погрузиться в богатое культурное, историческое и природное наследие региона. В течение тура туристы посетят несколько захватывающих мест, включая: Махачкала: Столица Дагестана, где гости могут познакомиться с местной атмосферой, культурой и кухней. Дербент: Древний город, известный своей культурной и исторической ценностью. Крепость Нарын-Кала в Дербенте – одно из наиболее выдающихся архитектурных сооружений, которое они смогут посетить.Кахиб и Гоор: Селения-призраки, предлагающие уникальный взгляд на традиционную архитектуру и культуру дагестанского народа.Сулакский каньон: Один из самых красивых и впечатляющих природных объектов в Дагестане.Бархан Сарыкум: Знаменитый песчаный бархан, предоставляющий возможность погрузиться в уникальную природу дагестанских пейзажей.Этот тур обещает участникам насыщенный опыт, сочетая историю, культуру и природу в удивительном сочетании.",
          price: 60500,
          photoTourId: 1,
          regionId: 1,
        },
        {
          name: "В сердце Кавказских гор",
          body: "Приглашаем вас в краткое, но яркое погружение в историю, самобытную культуру и природу страны гор. Вас ждет легендарный Гуниб, яркий Чох, памятники природы — Карадахская теснина и подземный водопад. Вы получите настоящий заряд бодрости и положительных эмоций.",
          description:
            "Добро пожаловать в увлекательное и насыщенное приключений путешествие по загадочному Дагестану! Вас ждет неповторимая возможность окунуться в удивительное сочетание истории, культуры и природы страны гор. Вот некоторые из уникальных мест, которые вы посетите: Гуниб: Легендарный город с богатой историей и уникальной архитектурой. Здесь вы сможете почувствовать атмосферу старинных улочек и загадочных легенд. Чох: Яркий и колоритный город, предоставляющий возможность познакомиться с национальными традициями и мастерством местных ремесленников. Карадахская теснина: Удивительное природное явление, предлагающее вам потрясающие виды и впечатляющие пейзажи. Это идеальное место для любителей природы и фотографии. Подземный водопад: Таинственное место, где вы сможете насладиться уникальным зрелищем подземного водопада, создающего удивительную атмосферу. Ваше путешествие обещает быть невероятным и запоминающимся, наполненным яркими впечатлениями и возможностью погрузиться в богатство культуры и красоты природы Дагестана. Приготовьтесь к заряду бодрости, волнующим открытиям и положительным эмоциям в каждом уголке этого удивительного региона!",
          price: 50000,
          photoTourId: 2,
          regionId: 1,
        },
        {
          name: "Ингушетия: Сокровища Кавказских Гор",
          body: "Экскурсии в Ингушетию раскроют перед вами Горную Ингушетию и Страну Башен с неожиданной перспективы! Погрузитесь в мир старинных башен, замков, храмов и архитектурных комплексов, известных далеко за пределами России!",
          description:
            "Вас ждет знакомство с природными и историческими достопримечательностями одной из самых загадочных республик Северного Кавказа — Ингушетии.Вы посетите знаменитый средневековый комплекс 'Вовнушки', совершите треккинг к Ляжгинскому водопаду, пройдетесь по улочнам древнего баенного комплекса Эгикал.",
          price: 45000,
          photoTourId: 3,
          regionId: 2,
        },
        {
          name: "Волшебные тропы Ингушетии: Природа и Культура",
          body: "Этот тур станет настоящим путеводителем в богатство культуры, национальных традиций и природных чудес Ингушетии, принося вам незабываемый заряд положительных впечатлений и новых открытий.",
          description:
            "Погрузитесь в увлекательное путешествие по таинственной Ингушетии, где вас ждет знакомство с богатством природы и истории. В рамках тура вы посетите знаменитый средневековый комплекс Эгикал, пройдете треккинг к Ляжгинскому водопаду и замковым комплексам в горах, воочию увидите средневековые селения и родовые башни.",
          price: 65000,
          photoTourId: 4,
          regionId: 2,
        },
        {
          name: "Многонациональная Кабардино-Балкария: культурное разнообразие Кавказа",
          body: "Кабардино-Балкария в Первоклассном Путешествии по Стране гор! В одном туре вы посетите города, памятники истории и культуры и природные чудеса:  Долина Нарзанов, Горнолыжные комплексы «Эльбрус-Азау» и «Чегет», Чегемское ущелье,Голубое озеро!",
          description:
            "Погрузитесь в захватывающий мир Кабардино-Балкарии в рамках уникального тура Кабардино-Балкария в Первоклассном Путешествии по Стране гор. В течение одного увлекательного тура вы посетите не только культурные и исторические наследия, но и окунетесь в великолепие природных чудес.",
          price: 50000,
          photoTourId: 5,
          regionId: 3,
        },
        {
          name: "Кабардино-Балкария в объятиях горных рек и каньонов",
          body: "Добро пожаловать в удивительный тур по Кабардино-Балкарии, где природа раскрывает свою красоту в объятиях горных рек и каньонов. Этот уникальный уголок России предоставляет вам возможность погрузиться в захватывающий мир величественных гор, кристально чистых рек и удивительных каньонов.",
          description:
            "Пройдите по извилистым тропам, ведущим к вершинам Кавказских гор, и ощутите величие местного ландшафта. Ваш путь будет пересечен потрясающими горными реками, исходящими из высокогорных ледников, наполняющими воздух свежестью и благоуханием природы. Погрузитесь в приключение, исследуя глубокие каньоны, вырезанные веками водой. Скалы, поднимающиеся вокруг, будут свидетелями истории, рассказывая вам о могуществе природных сил. Откройте для себя магию каньонов, где каждый поворот скрывает в себе новые удивительные пейзажи.",
          price: 50000,
          photoTourId: 6,
          regionId: 3,
        },

        {
          name: "Сказочные Долины Чечни",
          body: "Погрузитесь в атмосферу волшебства, исследуя прекрасные долины Чечни, насыщенные историей и неповторимой природой.",
          description:
            "Путешествие по Чеченской республике обещает уникальное погружение в ее богатое наследие, в котором особое внимание уделяется тысячам средневековых башен, символизирующих древнюю историю этого региона. Путешественники будут окружены величественной архитектурой, раскрывающей тайны прошлого и свидетельствующей о богатстве культурного наследия.",
          price: 50000,
          photoTourId: 7,
          regionId: 4,
        },
        {
          name: "Культурные Сокровища Чеченской Республики",
          body: "Познакомьтесь с богатой культурой Чечни, посещая исторические памятники, музеи и традиционные места.",
          description:
            "Вдоль пути участникам предстоит наслаждаться захватывающими природными пейзажами, характерными для Чечни. Зеленые долины, покрытые густыми лесами, и величественные горы создают неповторимый фон для этого путешествия. Разнообразие флоры и фауны добавляет волшебства в каждый момент пребывания в этом удивительном регионе. Участники тура смогут почувствовать дух гостеприимства местного населения, познакомившись с традиционной чеченской кухней и обычаями. Это погружение в местную культуру дополняет исторический контекст и создает полноценный опыт для всех, кто решит отправиться в это захватывающее приключение.",
          price: 65000,
          photoTourId: 8,
          regionId: 4,
        },
        {
          name: "Культурные сокровища Дагестана: Шали, Хунзах, Сулакский каньон",
          body: "Увлекательный маршрут по культурным и природным жемчужинам Дагестана, включая посещение Шали, Хунзаха и завораживающего Сулакского каньона",
          description:
            "Погружение в увлекательный маршрут по Дагестану предоставляет уникальную возможность открыть перед участниками богатство культурных и природных жемчужин этого региона. Путешественники начнут свое приключение с посещения Шали, где оживает богатая история и традиционная архитектура местных поселений. Здесь они смогут окунуться в аутентичную атмосферу и узнать больше о дагестанском наследии.",
          price: 60000,
          photoTourId: 9,
          regionId: 1,
        },
        {
          name: "Ингушетия в объятиях природы",
          body: "Уникальное путешествие, сочетающее красоты Ляжгинского водопада и древнего комплекса Эгикал, раскрывающее природные и культурные богатства республики.",
          description:
            "Погружение в уникальные сокровища республики начинается с восхождения к Ляжгинскому водопаду, великолепного природного чуда, где каскады воды создают завораживающий и вдохновляющий вид. Этот каскад, вписанный в панораму гор, становится не только местом захватывающего приключения, но и источником умиротворения под звуки природы. Продолжая путь, путешественники достигают древнего комплекса Эгикал, места, насыщенного культурной и исторической ценностью. Здесь они окунутся в обители времени, где архитектурные шедевры и древние артефакты расскажут удивительные истории прошлого. Эгикал станет площадкой для встречи с мудростью веков и наслаждения величием культурного наследия.",
          price: 55000,
          photoTourId: 10,
          regionId: 2,
        },
        {
          name: "Красоты Эльбруса: Горнолыжные радости и Долина Нарзанов",
          body: "Необыкновенное приключение в самом сердце Кавказа, включающее в себя горные радости на Эльбрусе и покой в Долине Нарзанов.",
          description:
            "Путешественники отправятся на горные радости на Эльбрусе, самой высокой вершине Европы, где встречаются альпийские просторы и величественные пейзажи. Восхождение на этот величественный горный пик станет незабываемым испытанием для любителей активного отдыха.Это приключение предоставляет баланс между энергией гор и спокойствием природы, предоставляя участникам возможность пережить истинное волшебство Кавказа.",
          price: 70000,
          photoTourId: 11,
          regionId: 3,
        },
        {
          name: "Страна тысячи башен: Великолепие истории и природы",
          body: "Погружение в богатое наследие Чеченской республики с ее тысячами средневековых башен и великолепными природными пейзажами",
          description:
            "Вдоль пути участникам предстоит наслаждаться захватывающими природными пейзажами, характерными для Чечни. Зеленые долины, покрытые густыми лесами, и величественные горы создают неповторимый фон для этого путешествия. Разнообразие флоры и фауны добавляет волшебства в каждый момент пребывания в этом удивительном регионе. Участники тура смогут почувствовать дух гостеприимства местного населения, познакомившись с традиционной чеченской кухней и обычаями. Это погружение в местную культуру дополняет исторический контекст и создает полноценный опыт для всех, кто решит отправиться в это захватывающее приключение.",
          price: 50000,
          photoTourId: 12,
          regionId: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
