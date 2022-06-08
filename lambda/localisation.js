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
                                    Or if you are a poker enthusiast, then Seven Inn Poker Club is for you!!
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
                                    That Dracula's Castle. It works!!!
                                    </amazon:emotion>`,
            AVENTURA_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    That Aventura Park. It works!!!
                                    </amazon:emotion>`,  
            ZOO_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    That Zoo. It works!!!
                                    </amazon:emotion>`,
            ROPE_STR_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    That Rope Street. It works!!!
                                    </amazon:emotion>`,
            AQUATIC_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    That Aquatic Paradise. It works!!!
                                    </amazon:emotion>`,
            POKER_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    That Poker Casino. It works!!!
                                    </amazon:emotion>`,
            REJECTED_MSG: 'No problem. Please say it again, so I can get it right. ',
            MISSING_MSG: `It looks like you haven't told me your first name yet. `,
            HELP_MSG: 'I can help you to have some fun in Brasov city. Are you hungry or do you want to visit the city? ',
            REPROMPT_MSG: `If you're not sure what to do next, try asking for help. `,
            GOODBYE_MSG: 'Goodbye, {{name}}! ',
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
            WELCOME_MSG: `Salut! Bienvenue à Tourist in Brasov. Amusons-nous dans cette belle ville! `,
            WELCOME_BACK_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    Je me souviens de vous! Bienvenue à nouveau {{name}}!
                                    <break time="1s"/>
                                    Passons une autre journée merveilleuse ensemble à Brasov!
                                    <break time="1s"/>
                                    Qu'est-ce qui vous intéresserait aujourd'hui? De la nourriture ou de beaux endroits que vous devez voir? 
                                </amazon:emotion>`,
            POST_REGISTER_MSG: `<amazon:emotion name="excited" intensity="high">
                                    Quel prénom intéressant!
                                    Je veux te dire un petit secret.
                                    <amazon:effect name="whispered">En Amérique, ils le prononcent <lang xml:lang="en-US">{{name}}</lang></amazon:effect>
                                    <break time="1500ms"/>
                                    Mignon, non?
                                    <break time="1s"/>
                                    En tous cas... J'ai enregistré votre prénom. Maintenant, profitons de cette escapade citadine ensemble.
                                    <break time="1s"/>
                                    Qu'est-ce qui vous intéresserait aujourd'hui? De la nourriture ou de beaux endroits que vous devez voir?
                                </amazon:emotion>`,
            FOOD_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                    Alors, tu as faim!
                                    Bien... Voyons quelques restaurants!
                                    <break time="1s"/>
                                    <audio src="soundbank://soundlibrary/computers/typing/typing_02"/>
                                    <break time="1s"/>
                                    Je viens de trouver des endroits intéressants pour manger!
                                    <break time="1s"/>
                                    Tout d'abord, je vous laisse choisir l'une des catégories suivantes !
                                    J'ai pour vous : international, roumain et méditerranéen.
                                    <break time="500ms"/>
                                    Alors, lequel aimeriez-vous essayer?
                                </amazon:emotion>`,
            PLACES_INTEREST_MSG: `<amazon:emotion name="excited" intensity="high">
                                    <say-as interpret-as="interjection">Woo hoo</say-as>
                                    <break time="1s"/>
                                    Cool!!! C'est ma partie préférée concernant une escapade en ville parce que je peux prendre des photos !
                                    <audio src="soundbank://soundlibrary/camera/camera_01"/>
                                    <break time="1s"/>
                                    Voyons quelques endroits incroyables ici!
                                    <break time="1s"/>
                                    Je vous ai préparé une liste d'options !
                                    Alors...
                                    <lang xml:lang="en-US">Dracula's Castle</lang>,
                                    <lang xml:lang="en-US">Aventura Park</lang>,
                                    <lang xml:lang="en-US">Zoo</lang>,
                                    <lang xml:lang="en-US">Rope Street</lang>
                                    <break time="1s"/>
                                    Comme quelques extras...
                                    Si vous êtes passionné de natation, vous pouvez vous rendre au <lang xml:lang="en-US">Aquatic Paradise</lang>!
                                    <break time="1s"/>
                                    Ou si vous êtes un passionné de poker, alors <lang xml:lang="en-US">Seven Inn Poker Club</lang> est fait pour vous!!
                                    Choisissez une option, et je vous donnerai les détails!!
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
                                    MONARK propose une sélection variée de plats extraordinaires dans un restaurant moderne et vaste avec des fenêtres massives spectaculaires, une sensation d'arche et un design magnifique.
                                    Le restaurant est situé dans l'hôtel QOSMO, au numéro quatre de la rue Zaharia Stancu, et est ouvert tous les jours de 7AM à 12AM.
                                    En guise de recommandation... pour la nourriture, essayez le Saumon Gravlax à la betterave et au fromage de chèvre, et pour le vin, essayez <lang xml:lang="it-IT">Brunello di Montalcino, Il Poggione, Italia.</lang>
                                  </amazon:emotion>`,
            SOMMELIER_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Le Sommelier est un lieu convivial et chic, où les gens ont la possibilité de faire connaissance avec le vin, de goûter un maximum de variétés, des variétés roumaines authentiques aux variétés exotiques.
                                        Le restaurant est situé au numéro six de la rue Diaconu Coresi et est ouvert tous les jours de 8h00 à 22h00.
                                        En guise de recommandation... essayez la cuisse de canard confite avec du chou compoté et de la purée de pommes de terre aux truffes. 
                                     </amazon:emotion>`,
            ROMANIAN_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Roumain??
                                        Laisse moi vérifier
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
                                      A OGRADA vous trouverez le marché : des producteurs locaux entourés des délices qu'ils préparent avec soin,
                                      des plats dont nous sommes tombés amoureux dès la première bouchée,
                                      et un restaurant : le lieu où l'on prépare les plats de cette carte avec des ingrédients de la région,
                                      afin que vous puissiez goûter et comprendre combien peut être fait.
                                      <break time="1s"/>
                                      Le restaurant est situé au numéro quatorze de la place du Conseil et est ouvert tous les jours de 12h à 22h.
                                      <break time="1s"/>
                                      Comme recommandation... essayez les côtes de porc avec des pommes mûres.
                                   </amazon:emotion>`,
            SERGIANA_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Service raffiné et serveuses vêtues de costumes folkloriques.
                                         Cretons de porc à l'oignon et pain frais, offerts par la maison. Un menu riche et des gens heureux.
                                         Le charme de la cuisine Sergiana est indéniable, car il réside dans ses recettes traditionnelles et dans les produits que nous livrons quotidiennement de nos fermes locales.
                                         C'est pourquoi nos plats sont incroyablement savoureux et préservent les goûts d'autrefois, en trois langues - allemand, hongrois et roumain.
                                        <break time="1s"/>
                                        Le restaurant est situé au numéro un de la rue Zaharia Stancu, à l'intérieur du centre commercial Coresi et est ouvert tous les jours de 10h à 22h.
                                        <break time="1s"/>
                                        En guise de recommandation, essayez la soupe aux tripes avec de la crème sure.
                                   </amazon:emotion>`,
            DRACULAS_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Dracula! C'est bien!
                                    </amazon:emotion>`,
            AVENTURA_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        Aventure! C'est bien!
                                    </amazon:emotion>`,  
            ZOO_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                   Zoo! C'est bien!
                               </amazon:emotion>`,
            ROPE_STR_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                        La rue!! C'est bien!!
                                    </amazon:emotion>`,
            AQUATIC_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                       Le paradis! C'est bien!
                                   </amazon:emotion>`,
            POKER_INTEREST_MSG: `<amazon:emotion name="excited" intensity="medium">
                                     Le casino! C'est bien!
                                 </amazon:emotion>`,
            REJECTED_MSG: `Aucun problème. S'il vous plaît, répétez-le que je puisse le comprendre correctement. `,
            MISSING_MSG: `On dirait que tu ne m'as pas encore dit ton prénom. `,
            HELP_MSG: 'Je peux vous aider à vous amuser dans la ville de Brasov. Avez-vous faim ou voulez-vous visiter la ville? ',
            REPROMPT_MSG: `Si vous ne savez pas quoi faire ensuite, essayez de demander de l'aide. `,
            GOODBYE_MSG: 'Au revoir, {{name}}! ',
            REFLECTOR_MSG: 'Vous venez de déclencher {{intent}}. ',
            FALLBACK_MSG: `<amazon:emotion name="disappointed" intensity="high">
                                Désolé, je ne sais pas à ce sujet. Veuillez réessayer.
                           </amazon:emotion>`,
            ERROR_MSG: `<amazon:emotion name="disappointed" intensity="high">
                            Désolé, il y a eu une erreur. Veuillez réessayer.
                        </amazon:emotion>`
        }
    }
}