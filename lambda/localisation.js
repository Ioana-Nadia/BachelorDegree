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
                                    Cool!!! Let's see some amazing places here! 
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
            REJECTED_MSG: 'No problem. Please say the name again so I can get it right. ',
            MISSING_MSG: `It looks like you haven't told me your first name yet. `,
            HELP_MSG: 'I can help you to have some fun in Brasov city. Are you hungry or do you want to visit the city? ',
            REPROMPT_MSG: `If you're not sure what to do next try asking for help. `,
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
                                    Cool!!! Voyons quelques endroits incroyables ici!
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
            REJECTED_MSG: 'Aucun problème. Veuillez répéter le nom pour que je puisse le comprendre correctement. ',
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