module.exports = {
    en: {
        translation: {
            WELCOME_MSG: `Hi! Welcome to Tourist in Brasov. Let's have some fun in this beautiful city! `,
            WELCOME_BACK_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    I remember you! Welcome back {{name}}!
                                    <break time="1s"/>
                                    Let's have another wonderful day together in Brasov!
                                    <break time="1s"/>
                                    What would you be interested in today? Some food or beautiful places you must see? 
                                </amazon:emotion>`,
            POST_REGISTER_MSG: `<amazon:emotion name="excited" intensity="high">
                                    What an interesting name!
                                    I want to tell you a small secret.
                                    <amazon:effect name="whispered">In France, they pronounce it <lang xml:lang="fr-FR">{{name}}</lang></amazon:effect>
                                    <break time="1500ms"/>
                                    Cute, right?
                                    <break time="1s"/>
                                    Anyway... I've saved your first name. Now, let's enjoy this city break together.
                                    <break time="1s"/>
                                    What would you be interested in today? Some food or beautiful places you must see?
                                </amazon:emotion>`,
            FOOD_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">    
                                    So, you are hungry!
                                    Ok... Let's see some restaurants!
                                    <break time="1s"/>
                                    <audio src="soundbank://soundlibrary/computers/typing/typing_02"/>
                                    <break time="1s"/>
                                    I've just found some interesting places where you can eat!
                                    <break time="1s"/>
                                    First of all, I'll let you choose one of the following categories!
                                    I have for you: International, Romanian, and Mediterranean.
                                    <break time="500ms"/>
                                    So, which one would you like to try?
                                </amazon:emotion>`,
            PLACES_INTEREST_MSG: `<amazon:emotion name="excited" intensity="high">
                                    <say-as interpret-as="interjection">yabba dabba doo</say-as>
                                    <break time="1s"/>
                                    Cool!!! That's my favorite part regarding a city break because I can take pictures!
                                    <audio src="soundbank://soundlibrary/camera/camera_01"/>
                                    <break time="1s"/>
                                    Let's see some amazing places here!
                                    <break time="1s"/>
                                    I've prepared a list of options for you!
                                    So...
                                    Dracula's Castle,
                                    Aventura Park,
                                    Zoo,
                                    and Rope Street.
                                    <break time="1s"/>
                                    As some extras...
                                    If you are passionate about swimming, you can go to Aquatic Paradise.
                                    <break time="1s"/>
                                    Or if you are a poker enthusiast, then Spoker Poker Club is for you!!
                                    Choose an option, and I will give you the details!!
                                  </amazon:emotion>`,
            INTERNATIONAL_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                            So, you want international...
                                            <say-as interpret-as="interjection">hmm</say-as>.
                                            <break time="1s"/>
                                            I know some restaurants. Let's see...
                                            <break time="1s"/>
                                            I have two with high reviews!
                                            Monark
                                            <break time="1s"/>
                                            , and <lang xml:lang="fr-FR">Le Sommelier</lang> Wine Bar and <lang xml:lang="fr-FR">Brasserie</lang>
                                            <break time="500ms"/>
                                            Which one would you like to pick?
                                         </amazon:emotion>`,
            MEDITERRANEAN_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                            OK, mediterranean restaurants...
                                            <break time="250ms"/>
                                            But...
                                            <break time="250ms"/>
                                            I don't know...
                                            <break time="1s"/>
                                            <say-as interpret-as="interjection">gotcha</say-as>
                                            <break time="250ms"/>
                                            I was joking!
                                            <break time="1s"/>
                                            <say-as interpret-as="interjection">bada bing bada boom</say-as>
                                            <break time="250ms"/>
                                            I found two interesting restaurants for you!
                                            <break time="500ms"/>
                                            <lang xml:lang="it-IT">Vino E Sapori</lang>
                                            <break time="500ms"/>
                                            , and <lang xml:lang="it-IT">Cucinino</lang>
                                            <break time="500ms"/>
                                            Choose one of them and I will tell some words from the team of that restaurant.
                                         </amazon:emotion>`,
            VINOSAPORI_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        The team sends you a few words: 
                                        <break time="500ms"/>
                                        This restaurant was created out of our desire to combine wines with Italian dishes and to offer exceptional services at the right price to those who step on our doorstep. 
                                        Your satisfaction is our mission. 
                                        We are waiting for you today!
                                        <break time="1s"/>
                                        The restaurant is located on George Baritiu Street number 13 and is open daily from 12 PM to 11 PM.
                                        <break time="1s"/>
                                        As a recommendation... try <lang xml:lang="it-IT">Spectacolo di mare e orto</lang>.
                                        It represents spaghetti with seafood and mussels cooked together with slightly spicy seasonal vegetables.
                                   </amazon:emotion>`,
            CUCININO_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        <break time="250ms"/>
                                        Cucinino addresses people interested in a healthy lifestyle, with fresh, quality ingredients, but prepared quickly in an open space kitchen. 
                                        Recipes are reinterpreted.
                                        They are carefully collected, tested and implemented by chef <lang xml:lang="it-IT">Mario Guglielmi</lang>.
                                        <break time="1s"/>
                                        The restaurant is located on Diaconu Coresi Street number 6 and is open daily from 12 PM to 10 PM.
                                        <break time="1s"/>
                                        As a recommendation... try <lang xml:lang="it-IT">Gnocchi Quattro Formaggi</lang>.
                                   </amazon:emotion>`,
            MONARK_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    MONARK features a diverse selection of extraordinary cuisine in a modern and expansive restaurant with dramatic massive windows, an ark feel, and touch design.
                                    The restaurant is located in QOSMO Hotel, on Zaharia Stancu Street number four, and is open daily from 7 AM to 12 AM.
                                    As a recommendation... for food try Gravlax Salmon with beetroot and goat cheese, and for wine try <lang xml:lang="it-IT">Brunello di Montalcino, Il Poggione, Italia.</lang>
                                  </amazon:emotion>`,
            SOMMELIER_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        <lang xml:lang="fr-FR">Le Sommelier</lang> is a friendly and cute place, where people have the opportunity to get to know the wine, to taste as many varieties as possible, from authentic Romanian varieties to exotic varieties.
                                        The restaurant is located on Diaconu Coresi Street number six, and is open daily from 8 AM to 10 PM.
                                        As a recommendation... try candied duck leg with stewed cabbage and mashed potatoes with truffles.  
                                     </amazon:emotion>`,
            ROMANIAN_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Romanian??
                                        Let me check
                                        <break time="2s"/>
                                        <audio src="soundbank://soundlibrary/foley/amzn_sfx_glasses_clink_01"/>
                                        <say-as interpret-as="interjection">bingo!</say-as>
                                        I know!
                                        <break time="1s"/>
                                        There are two popular restaurants
                                        <break time="500ms"/>
                                        Ograda
                                        <break time="500ms"/>
                                        , and Sergiana
                                        <break time="1s"/>
                                        Choose one!
                                    </amazon:emotion>`,
            OGRADA_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        At OGRADA you will find the market: local producers surrounded by the delicacies they carefully prepare, 
                                        food that we fell in love with from the first bite, 
                                        and a restaurant: the place where we prepare the dishes from this menu with ingredients from the area,
                                        so that you can taste and understand how much can be made.
                                        <break time="1s"/>
                                        The restaurant is located in Council Square number fourteen and is open daily from 12 PM to 22 PM.
                                        <break time="1s"/>
                                        As a recommendation... try pork ribs with ripe apples.
                                   </amazon:emotion>`,
            SERGIANA_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Refined service and waitresses dressed in folk costumes. 
                                        Pork greaves with onion and fresh bread, on the house. A rich menu and happy people. 
                                        The charm of the Sergiana kitchen is unmistakable, as it lies in its traditional recipes and in the products that we deliver from our local farms on a daily basis.
                                        This is why our dishes are incredibly tasty and preserve the olden tastes, in three languages - German, Hungarian and Romanian.
                                        <break time="1s"/>
                                        The restaurant is located on Zaharia Stancu street number one, inside Coresi Mall and is open daily from 10 AM to 22 PM.
                                        <break time="1s"/>
                                        As a recommendation... try tripe sour soup with sour cream.
                                   </amazon:emotion>`,
            DRACULAS_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        <audio src="soundbank://soundlibrary/monsters/pigmy_bats/pigmy_bats_04"/>
                                        <break time="500ms"/>
                                        The castle is located in Bran on General Traian Mo??oiu street number twenty-four. 
                                        <break time="500ms"/>
                                        It is twenty-five kilometers southwest of Brasov and it reprezents a national monument and landmark in Transylvania. 
                                        More exactly, the fortress is on the Transylvanian side of the historical border with Wallachia, on road DN73.
                                        <audio src="soundbank://soundlibrary/monsters/vampires/vampires_01"/>
                                        It is often referred to as the home of the title character in Bram Stoker's Dracula...
                                        <audio src="soundbank://soundlibrary/monsters/vampires/vampires_10"/>
                                        The vampire who has associations with Vlad the Impaler
                                        <break time="500ms"/>
                                        The castle is now a museum dedicated to displaying art and furniture collected by Queen Marie. 
                                        Tourists can see the interior on their own or by a guided tour and it is open daily from 9 AM to 6 PM. Pay attention!! Only on Mondays it can be visited between 12 PM and 6 PM.
                                        <break time="500ms"/>
                                        The price of the standard ticket is 45 RON. 
                                        <break time="250ms"/>
                                        Have fun there!!
                                    </amazon:emotion>`,
            AVENTURA_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        The park is intended for recreation and embody the spirit outdoor. It's located in Brasov on Paltinului street number sixteen next to Noua lake.
                                        This is a place which can contain a wide variety of elements, including but not limited to, rope climbing exercises, obstacle courses, bouldering, rock climbing, target oriented activities, and zip-lines. 
                                        <break time="250ms"/>
                                        It is open in the warm season between 10 AM and 7 PM.
                                        The price of a standard ticket is ninety RON and it includes 3 hours of adventure.
                                        <break time="250ms"/>
                                        If you will go there, don't forget to say:
                                        <say-as interpret-as="interjection">geronimo</say-as>
                                    </amazon:emotion>`,  
            ZOO_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    <audio src="soundbank://soundlibrary/animals/amzn_sfx_bird_chickadee_chirp_1x_01"/>
                                    <break time="250ms"/>
                                    <audio src="soundbank://soundlibrary/animals/amzn_sfx_lion_roar_03"/>
                                    <break time="250ms"/>
                                    <audio src="soundbank://soundlibrary/animals/amzn_sfx_monkey_chimp_01"/>
                                    <break time="250ms"/>
                                    <audio src="soundbank://soundlibrary/camera/camera_01"/>
                                    <audio src="soundbank://soundlibrary/camera/camera_01"/>
                                    <break time="250ms"/>
                                    Zoo is the short for zoological garden. 
                                    Here in Brasov, this is located on Brazilor street number one.
                                    It was opened in 1960, and it's on 25 acres offering visitors a unique lions' den view, a reptile house, and a playground.
                                    There you can see a lot of animals.
                                    <break time="250ms"/>
                                    This zoo is open from Tuesday to Sunday between 9AM and 7PM.
                                    A standard ticket costs 20 RON
                                    Please enjoy this beautiful view!
                                </amazon:emotion>`,
            ROPE_STR_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Rope Street is the narrowest street in this city. 
                                        It is believed to be one of the narrowest streets in Europe.
                                        This was initially built as a corridor that firemen could use, and it is first mentioned in 17th century documents. 
                                        <break time="250ms"/>
                                        Rope Street is now a tourist attraction and meeting spot. Its width varies between 111 and 135 centimetres, and it is 80 metres long.
                                        You can find it on a map using this name, entrance is free!
                                    </amazon:emotion>`,
            AQUATIC_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                       <audio src="soundbank://soundlibrary/boats_ships/splashing_rowboat/splash_water_01"/>
                                       Aquatic Paradise is a spacious leisure center with multiple indoor and outdoor pools, a gym, sauna, restaurant and more.
                                       It is located on Grivitei 2F Street.
                                       <break time="250ms"/>
                                       It is open from Tuesday to Friday between 10AM and 9PM, Saturday and Sunday between 9 AM and 9 PM. Mondays, it's open between 12 PM and 9 PM.
                                       There are a lot of ticket types. The price is calculated regarding the days and the number of hours. The client can choose to have subscription.
                                       For example, the cheapest two-hour ticket costs 40 RON.
                                    </amazon:emotion>`,
            POKER_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        That Poker Casino, it's called Spoker.
                                        <break time="250ms"/>
                                        It is located on Avram Iancu Street number 114 and it's open daily between 6 PM and 6 AM.
                                        Visit the club to get more informations about the tournaments.
                                        Good luck!
                                    </amazon:emotion>`,
            REJECTED_MSG: 'No problem. Please say it again, so I can get it right. ',
            MISSING_MSG: `It looks like you haven't told me your first name yet. `,
            HELP_MSG: 'I can help you to have some fun in Brasov city. Are you hungry or do you want to visit the city? ',
            REPROMPT_MSG: `If you're not sure what to do next, try asking for help. `,
            GOODBYE_MSG: 'Goodbye {{name}}!',
            REFLECTOR_MSG: 'You just triggered {{intent}}. ',
            FALLBACK_MSG: `<amazon:emotion name="disappointed" intensity="high">
                                Sorry, I don't know about that. Please try again.
                           </amazon:emotion>`,
            ERROR_MSG: `<amazon:emotion name="disappointed" intensity="high">
                            Sorry, there was an error. Please try again.
                        </amazon:emotion>`
        }
    },
    
    fr: {
        translation: {
            WELCOME_MSG: `Salut! Bienvenue ?? Tourist in Brasov. Amusons-nous dans cette belle ville! `,
            WELCOME_BACK_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    Je me souviens de vous! Bienvenue ?? nouveau {{name}}!
                                    <break time="1s"/>
                                    Passons une autre journ??e merveilleuse ensemble ?? Brasov!
                                    <break time="1s"/>
                                    Qu'est-ce qui vous int??resserait aujourd'hui? De la nourriture ou de beaux endroits que vous devez voir? 
                                </amazon:emotion>`,
            POST_REGISTER_MSG: `<amazon:emotion name="excited" intensity="high">
                                    Quel pr??nom int??ressant!
                                    Je veux te dire un petit secret.
                                    <amazon:effect name="whispered">En Am??rique, ils le prononcent <lang xml:lang="en-US">{{name}}</lang></amazon:effect>
                                    <break time="1500ms"/>
                                    Mignon, non?
                                    <break time="1s"/>
                                    En tous cas... J'ai enregistr?? votre pr??nom. Maintenant, profitons de cette escapade citadine ensemble.
                                    <break time="1s"/>
                                    Qu'est-ce qui vous int??resserait aujourd'hui? De la nourriture ou de beaux endroits que vous devez voir?
                                </amazon:emotion>`,
            FOOD_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    Alors, tu as faim!
                                    Bien... Voyons quelques restaurants!
                                    <break time="1s"/>
                                    <audio src="soundbank://soundlibrary/computers/typing/typing_02"/>
                                    <break time="1s"/>
                                    Je viens de trouver des endroits int??ressants pour manger!
                                    <break time="1s"/>
                                    Tout d'abord, je vous laisse choisir l'une des cat??gories suivantes !
                                    J'ai pour vous : international, roumain et m??diterran??en.
                                    <break time="500ms"/>
                                    Alors, lequel aimeriez-vous essayer?
                                </amazon:emotion>`,
            PLACES_INTEREST_MSG: `<amazon:emotion name="excited" intensity="high">
                                    <say-as interpret-as="interjection">Woo hoo</say-as>
                                    <break time="1s"/>
                                    Cool!!! C'est ma partie pr??f??r??e concernant une escapade en ville parce que je peux prendre des photos??!
                                    <audio src="soundbank://soundlibrary/camera/camera_01"/>
                                    <break time="1s"/>
                                    Voyons quelques endroits incroyables ici!
                                    <break time="1s"/>
                                    Je vous ai pr??par?? une liste d'options !
                                    Alors...
                                    <lang xml:lang="en-US">Dracula's Castle</lang>,
                                    <lang xml:lang="en-US">Aventura Park</lang>,
                                    <lang xml:lang="en-US">Zoo</lang>,
                                    <lang xml:lang="en-US">Rope Street</lang>
                                    <break time="1s"/>
                                    Comme quelques extras...
                                    Si vous ??tes passionn?? de natation, vous pouvez vous rendre au <lang xml:lang="en-US">Aquatic Paradise</lang>!
                                    <break time="1s"/>
                                    Ou si vous ??tes un passionn?? de poker, alors <lang xml:lang="en-US">Seven Inn Poker Club</lang> est fait pour vous!!
                                    Choisissez une option, et je vous donnerai les d??tails!!
                                  </amazon:emotion>`,
            INTERNATIONAL_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                            Alors, tu veux international...
                                            <say-as interpret-as="interjection">Hmmm</say-as>.
                                            <break time="1s"/>
                                            Je connais des restaurants. Voyons voir...
                                            <break time="1s"/>
                                            J'ai deux avec de bonnes critiques!
                                            <lang xml:lang="en-US">Monark</lang>
                                            <break time="1s"/>
                                            , and Le Sommelier <lang xml:lang="en-US">Wine Bar and</lang> Brasserie
                                            <break time="500ms"/>
                                            Laquelle aimeriez-vous choisir?
                                         </amazon:emotion>`,
            MONARK_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    MONARK propose une s??lection vari??e de plats extraordinaires dans un restaurant moderne et vaste avec des fen??tres massives spectaculaires, une sensation d'arche et un design magnifique.
                                    Le restaurant est situ?? dans l'h??tel QOSMO, au num??ro quatre de la rue Zaharia Stancu, et est ouvert tous les jours de 7AM ?? 12AM.
                                    En guise de recommandation... pour la nourriture, essayez le Saumon Gravlax ?? la betterave et au fromage de ch??vre, et pour le vin, essayez <lang xml:lang="it-IT">Brunello di Montalcino, Il Poggione, Italia.</lang>
                                  </amazon:emotion>`,
            SOMMELIER_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Le Sommelier est un lieu convivial et chic, o?? les gens ont la possibilit?? de faire connaissance avec le vin, de go??ter un maximum de vari??t??s, des vari??t??s roumaines authentiques aux vari??t??s exotiques.
                                        Le restaurant est situ?? au num??ro six de la rue Diaconu Coresi et est ouvert tous les jours de 8h00 ?? 22h00.
                                        En guise de recommandation... essayez la cuisse de canard confite avec du chou compot?? et de la pur??e de pommes de terre aux truffes. 
                                     </amazon:emotion>`,
            ROMANIAN_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Roumain??
                                        Laisse moi v??rifier
                                        <break time="2s"/>
                                        <audio src="soundbank://soundlibrary/foley/amzn_sfx_glasses_clink_01"/>
                                        <say-as interpret-as="interjection">Bingo!</say-as>
                                        Je sais!
                                        <break time="1s"/>
                                        Il y a deux restaurants populaires
                                        <break time="500ms"/>
                                        Ograda
                                        <break time="500ms"/>
                                        , et Sergiana
                                        <break time="1s"/>
                                        Choisissez-en un!
                                    </amazon:emotion>`,
            OGRADA_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                      A OGRADA vous trouverez le march?? : des producteurs locaux entour??s des d??lices qu'ils pr??parent avec soin,
                                      des plats dont nous sommes tomb??s amoureux d??s la premi??re bouch??e,
                                      et un restaurant : le lieu o?? l'on pr??pare les plats de cette carte avec des ingr??dients de la r??gion,
                                      afin que vous puissiez go??ter et comprendre combien peut ??tre fait.
                                      <break time="1s"/>
                                      Le restaurant est situ?? au num??ro quatorze de la place du Conseil et est ouvert tous les jours de 12h ?? 22h.
                                      <break time="1s"/>
                                      Comme recommandation... essayez les c??tes de porc avec des pommes m??res.
                                   </amazon:emotion>`,
            SERGIANA_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Service raffin?? et serveuses v??tues de costumes folkloriques.
                                         Cretons de porc ?? l'oignon et pain frais, offerts par la maison. Un menu riche et des gens heureux.
                                         Le charme de la cuisine Sergiana est ind??niable, car il r??side dans ses recettes traditionnelles et dans les produits que nous livrons quotidiennement de nos fermes locales.
                                         C'est pourquoi nos plats sont incroyablement savoureux et pr??servent les go??ts d'autrefois, en trois langues - allemand, hongrois et roumain.
                                        <break time="1s"/>
                                        Le restaurant est situ?? au num??ro un de la rue Zaharia Stancu, ?? l'int??rieur du centre commercial Coresi et est ouvert tous les jours de 10h ?? 22h.
                                        <break time="1s"/>
                                        En guise de recommandation, essayez la soupe aux tripes avec de la cr??me sure.
                                   </amazon:emotion>`,
            MEDITERRANEAN_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                            Bien, les restaurants m??diterran??ens...
                                            <break time="250ms"/>
                                            Mais...
                                            <break time="250ms"/>
                                            Je ne sais pas...
                                            <break time="1s"/>
                                            <break time="250ms"/>
                                            Je rigolais!
                                            <break time="1s"/>
                                            <say-as interpret-as="interjection">bada bing bada boom</say-as>
                                            <break time="250ms"/>
                                            J'ai trouv?? deux restaurants int??ressants pour vous!
                                            <break time="500ms"/>
                                            <lang xml:lang="it-IT">Vino E Sapori</lang>
                                            <break time="500ms"/>
                                            , and <lang xml:lang="it-IT">Cucinino</lang>
                                            <break time="500ms"/>
                                            Choisissez-en un et je vous dirai quelques mots de l'??quipe de ce restaurant.
                                         </amazon:emotion>`,
            VINOSAPORI_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        L'??quipe vous envoie quelques mots : 
                                        <break time="500ms"/>
                                        Ce restaurant est n?? de notre d??sir d'allier les vins aux plats italiens et d'offrir des services exceptionnels au juste prix ?? ceux qui franchissent notre porte.
                                        Votre satisfaction est notre mission.
                                        Nous vous attendons aujourd'hui !
                                        <break time="1s"/>
                                        Le restaurant est situ?? au num??ro 13 de la rue George Baritiu et est ouvert tous les jours de 12 h 00 ?? 23 h 00.
                                        <break time="1s"/>
                                        En guise de recommandation... essayer <lang xml:lang="it-IT">Spectacolo di mare e orto</lang>.
                                        Il repr??sente des spaghettis aux fruits de mer et moules cuisin??s avec des l??gumes de saison l??g??rement ??pic??s.
                                   </amazon:emotion>`,
            CUCININO_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        <break time="250ms"/>
                                        Cucinino s'adresse aux personnes int??ress??es par un mode de vie sain, avec des ingr??dients frais et de qualit??, mais pr??par??s rapidement dans une cuisine ?? aire ouverte.
                                        Les recettes sont r??interpr??t??es.
                                        Ils sont soigneusement collect??s, test??s et mis en ??uvre par le chef <lang xml:lang="it-IT">Mario Guglielmi</lang>.
                                        <break time="1s"/>
                                        Le restaurant est situ?? au num??ro 6 de la rue Diaconu Coresi et est ouvert tous les jours de 12 h 00 ?? 22 h 00.
                                        <break time="1s"/>
                                        En guise de recommandation... essayer <lang xml:lang="it-IT">Gnocchi Quattro Formaggi</lang>.
                                   </amazon:emotion>`,
            DRACULAS_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        <audio src="soundbank://soundlibrary/monsters/pigmy_bats/pigmy_bats_04"/>
                                        <break time="500ms"/>
                                        Le ch??teau est situ?? ?? Bran au num??ro vingt-quatre de la rue General Traian Mo??oiu. 
                                        <break time="500ms"/>
                                        Il se trouve ?? vingt-cinq kilom??tres au sud-ouest de Brasov et repr??sente un monument national et un point de rep??re en Transylvanie.
                                        Plus exactement, la forteresse se trouve du c??t?? transylvanien de la fronti??re historique avec la Valachie, sur la route DN73.
                                        <audio src="soundbank://soundlibrary/monsters/vampires/vampires_01"/>
                                        On l'appelle souvent la maison du personnage principal de Dracula de Bram Stoker...
                                        <audio src="soundbank://soundlibrary/monsters/vampires/vampires_10"/>
                                        Le vampire qui a des associations avec Vlad l'Empaleur
                                        <break time="500ms"/>
                                        Le ch??teau est maintenant un mus??e d??di?? ?? l'exposition d'art et de meubles collect??s par la reine Marie.
                                        Les touristes peuvent voir l'int??rieur par eux-m??mes ou par une visite guid??e et il est ouvert tous les jours de 9h00 ?? 18h00. Faites attention!! Uniquement le lundi, il peut ??tre visit?? entre 12h et 18h.
                                        <break time="500ms"/>
                                        Le prix du billet standard est de 45 RON.
                                        <break time="250ms"/>
                                        Amusez-vous l??-bas!!
                                    </amazon:emotion>`,
            AVENTURA_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Le parc est destin?? aux loisirs et incarne l'esprit outdoor. Il est situ?? ?? Brasov sur la rue Paltinului num??ro seize ?? c??t?? du lac Noua.
                                        C'est un endroit qui peut contenir une grande vari??t?? d'??l??ments, y compris, mais sans s'y limiter, des exercices d'escalade sur corde, des parcours d'obstacles, du bloc, de l'escalade, des activit??s cibl??es et des tyroliennes.
                                        <break time="250ms"/>
                                        Il est ouvert en saison chaude entre 10h et 19h.
                                        Le prix d'un billet standard est de quatre-vingt-dix RON et comprend 3 heures d'aventure.
                                        <break time="250ms"/>
                                        Si vous y allez, n'oubliez pas de dire:
                                        <say-as interpret-as="interjection">Youhou</say-as>
                                    </amazon:emotion>`,
            ZOO_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    <audio src="soundbank://soundlibrary/animals/amzn_sfx_bird_chickadee_chirp_1x_01"/>
                                    <break time="250ms"/>
                                    <audio src="soundbank://soundlibrary/animals/amzn_sfx_lion_roar_03"/>
                                    <break time="250ms"/>
                                    <audio src="soundbank://soundlibrary/animals/amzn_sfx_monkey_chimp_01"/>
                                    <break time="250ms"/>
                                    <audio src="soundbank://soundlibrary/camera/camera_01"/>
                                    <audio src="soundbank://soundlibrary/camera/camera_01"/>
                                    <break time="250ms"/>
                                    Zoo est l'abr??viation de jardin zoologique.
                                    Ici ?? Brasov, c'est situ?? sur la rue Brazilor num??ro un.
                                    Il a ??t?? ouvert en 1960 et s'??tend sur 25 acres offrant aux visiteurs une vue unique sur le taniere des lions, une maison de reptiles et un terraine de jeux.
                                    L??, vous pouvez voir beaucoup d'animaux.
                                    <break time="250ms"/>
                                    Ce zoo est ouvert du mardi au dimanche de 9h ?? 19h.
                                    Un billet standard co??te 20 RON
                                    S'il vous pla??t profiter de cette belle vue!
                                </amazon:emotion>`,
            ROPE_STR_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Rope Street est la rue la plus ??troite de cette ville.
                                        On pense que c'est l'une des rues les plus ??troites d'Europe.
                                        Il a ??t?? initialement construit comme un couloir que les pompiers pouvaient utiliser, et il est mentionn?? pour la premi??re fois dans des documents du XVIIe si??cle.
                                        <break time="250ms"/>
                                        Rope Street est maintenant une attraction touristique et un lieu de rencontre. Sa largeur varie entre 111 et 135 centim??tres, et il mesure 80 m??tres de long.
                                        Vous pouvez le trouver sur une carte en utilisant ce nom, l'entr??e est gratuite!
                                    </amazon:emotion>`,
            AQUATIC_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                       <audio src="soundbank://soundlibrary/boats_ships/splashing_rowboat/splash_water_01"/>
                                       Aquatic Paradise est un centre de loisirs spacieux avec plusieurs piscines int??rieures et ext??rieures, une salle de sport, un sauna, un restaurant et bien plus encore.
                                       Il est situ?? sur la rue Grivitei 2F.
                                       <break time="250ms"/>
                                       Il est ouvert du mardi au vendredi de 10h ?? 21h, le samedi et le dimanche de 9h ?? 21h. Le lundi, il est ouvert de 12h ?? 21h.
                                       Il existe de nombreux types de billets. Le prix est calcul?? en fonction des jours et du nombre d'heures. Le client peut choisir d'avoir un abonnement.
                                       Par exemple, le billet de deux heures le moins cher co??te 40 RON.
                                    </amazon:emotion>`,
            POKER_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Ce Poker Casino s'appelle Spoker.
                                        <break time="250ms"/>
                                        Il est situ?? au num??ro 114 de la rue Avram Iancu et est ouvert tous les jours de 18 h 00 ?? 06 h 00.
                                        Visitez le club pour obtenir plus d'informations sur les tournois.
                                        Bonne chance!
                                    </amazon:emotion>`,
            REJECTED_MSG: `Aucun probl??me. S'il vous pla??t, r??p??tez-le que je puisse le comprendre correctement. `,
            MISSING_MSG: `On dirait que tu ne m'as pas encore dit ton pr??nom. `,
            HELP_MSG: 'Je peux vous aider ?? vous amuser dans la ville de Brasov. Avez-vous faim ou voulez-vous visiter la ville? ',
            REPROMPT_MSG: `Si vous ne savez pas quoi faire ensuite, essayez de demander de l'aide. `,
            GOODBYE_MSG: 'Au revoir {{name}}! ',
            REFLECTOR_MSG: 'Vous venez de d??clencher {{intent}}. ',
            FALLBACK_MSG: `<amazon:emotion name="disappointed" intensity="high">
                                D??sol??, je ne sais pas ?? ce sujet. Veuillez r??essayer.
                           </amazon:emotion>`,
            ERROR_MSG: `<amazon:emotion name="disappointed" intensity="high">
                            D??sol??, il y a eu une erreur. Veuillez r??essayer.
                        </amazon:emotion>`
        }
    }
}