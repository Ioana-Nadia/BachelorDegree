const Alexa = require('ask-sdk-core');
var persistenceAdapter = getPersistenceAdapter();
const i18n = require('i18next');
const languageStrings = require('./localisation.js');

function getPersistenceAdapter(tableName) {
    // This function is an indirect way to detect if this is part of an Alexa-Hosted skill
    function isAlexaHosted() {
        return process.env.S3_PERSISTENCE_BUCKET;
    }
    if (isAlexaHosted()) {
        const {S3PersistenceAdapter} = require('ask-sdk-s3-persistence-adapter');
        return new S3PersistenceAdapter({
            bucketName: process.env.S3_PERSISTENCE_BUCKET
        });
    } else {
        // IMPORTANT: don't forget to give DynamoDB access to the role i am using to run this lambda (via IAM policy)
        const {DynamoDbPersistenceAdapter} = require('ask-sdk-dynamodb-persistence-adapter');
        return new DynamoDbPersistenceAdapter({
            tableName: tableName || 'tourist_in_brasov',
            createTable: true
        });
    }
}

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const name = sessionAttributes['name'];
        const dataAvailability = name;
        let outputSpeech = "";

        if (dataAvailability)
            return VisitCityIntentHandler.handle(handlerInput);
        else {
            outputSpeech += handlerInput.t('WELCOME_MSG') + handlerInput.t('MISSING_MSG');
            // we use intent chaining to trigger the first name registration multi-turn
            return handlerInput.responseBuilder
                .speak(outputSpeech)
                // we use intent chaining to trigger the first name registration multi-turn
                .addDelegateDirective({
                    name: 'RegisterNameIntent',
                    confirmationStatus: 'NONE',
                    slots: {}
                })
                .getResponse();
        }
     }
};

const RegisterNameIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RegisterNameIntent';
    },
    handle(handlerInput) {
        const {attributesManager, requestEnvelope} = handlerInput;
        const sessionAttributes = attributesManager.getSessionAttributes();
        const {intent} = requestEnvelope.request;

        if (intent.confirmationStatus === 'CONFIRMED') {
            const firstName = Alexa.getSlotValue(requestEnvelope, 'name');
            sessionAttributes['name'] = firstName;
            sessionAttributes['sessionCounter'] = 1; 
            return VisitCityIntentHandler.handle(handlerInput);
        }

        return handlerInput.responseBuilder
            .speak(handlerInput.t('REJECTED_MSG'))
            .reprompt(handlerInput.t('REPROMPT_MSG'))
            .getResponse();
    }
};

const ChooseAttractionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ChooseAttractionIntent';
    },
    handle(handlerInput) {
        const {attributesManager, requestEnvelope} = handlerInput;
        const sessionAttributes = attributesManager.getSessionAttributes();
        const {intent} = requestEnvelope.request;
        let outputSpeech = "";
        
        if (intent.confirmationStatus === 'CONFIRMED') {
            let attrName = Alexa.getSlotValue(requestEnvelope, 'attraction');
            let upperValue = attrName.toUpperCase();
            switch(upperValue) {
                case "DRACULA'S CASTLE":
                    outputSpeech += handlerInput.t('DRACULAS_INTEREST_MSG')
                    break;
                case "AVENTURA PARK":
                    outputSpeech += handlerInput.t('AVENTURA_INTEREST_MSG')
                    break;
                case "ZOO":
                    outputSpeech += handlerInput.t('ZOO_INTEREST_MSG')
                    break;
                case "ROPE STREET":
                    outputSpeech += handlerInput.t('ROPE_STR_INTEREST_MSG')
                    break;
                case "AQUATIC PARADISE":
                    outputSpeech += handlerInput.t('AQUATIC_INTEREST_MSG')
                    break;
                case "POKER CLUB":
                    outputSpeech += handlerInput.t('POKER_INTEREST_MSG')
                    break;
            }
            
            return handlerInput.responseBuilder
                .speak(outputSpeech)
                .reprompt(outputSpeech)
                .getResponse();
        }
        else {
            outputSpeech += handlerInput.t('REJECTED_MSG');
            return handlerInput.responseBuilder
                .speak(outputSpeech)
                .reprompt(handlerInput.t('REPROMPT_MSG'))
                .getResponse();
        }
    }
};

const VisitCityIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'VisitCityIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const firstName = sessionAttributes['name'];
        const counter = sessionAttributes['sessionCounter']; 
        const dataAvailability = firstName;
        
        if(dataAvailability) {
            if(counter > 1) {
                speakOutput += handlerInput.t('WELCOME_BACK_MSG', {name: firstName});
            }
            else
                speakOutput += handlerInput.t('POST_REGISTER_MSG', {name: firstName});
        }
        else
            speakOutput += handlerInput.t('MISSING_MSG');
            
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const InterestedInFoodIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'InterestedInFood';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('FOOD_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const InterestedInPlacesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'InterestedInPlaces';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('PLACES_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const InternationalFoodIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'InternationalFoodIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('INTERNATIONAL_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const MonarkIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MonarkIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('MONARK_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SommelierIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SommelierIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('SOMMELIER_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const RomanianFoodIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RomanianFoodIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('ROMANIAN_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const OgradaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'OgradaIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('OGRADA_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SergianaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SergianaIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('SERGIANA_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const MediterraneanFoodIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MediterraneanFoodIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('MEDITERRANEAN_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const VinoESaporiIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'VinoESaporiIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('VINOSAPORI_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CucininoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CucininoIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        speakOutput += handlerInput.t('CUCININO_INTEREST_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput =  handlerInput.t('HELP_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const GoodbyeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GoodbyeIntent';
    },
    handle(handlerInput) {
        let speakOutput = "";
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const firstName = sessionAttributes['name'];
        speakOutput += handlerInput.t('GOODBYE_MSG', {name: firstName});
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
            || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const firstName = sessionAttributes['name'];
        const speakOutput = handlerInput.t('GOODBYE_MSG', {name: firstName});
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in the skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('FALLBACK_MSG');
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said.
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = handlerInput.t('REFLECTOR_MSG', {intent: intentName});

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * Generic error handling to capture any syntax or routing errors.
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = handlerInput.t('ERROR_MSG');
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SaveAttributesResponseInterceptor = {
    async process(handlerInput, response) {
        if (!response) return; // avoid intercepting calls that have no outgoing response due to errors
        const {attributesManager, requestEnvelope} = handlerInput;
        const sessionAttributes = attributesManager.getSessionAttributes();
        const shouldEndSession = (typeof response.shouldEndSession === "undefined" ? true : response.shouldEndSession); //is this a session end?
        if (shouldEndSession || Alexa.getRequestType(requestEnvelope) === 'SessionEndedRequest') { // skill was stopped or timed out
            // increment a persistent session counter here
            sessionAttributes['sessionCounter'] = sessionAttributes['sessionCounter'] ? sessionAttributes['sessionCounter'] + 1 : 1;
            // make ALL session attributes persistent
            console.log('Saving to persistent storage:' + JSON.stringify(sessionAttributes));
            attributesManager.setPersistentAttributes(sessionAttributes);
            await attributesManager.savePersistentAttributes();
        }
    }
};

const LoadAttributesRequestInterceptor = {
    async process(handlerInput) {
        const {attributesManager, requestEnvelope} = handlerInput;
        if (Alexa.isNewSession(requestEnvelope)){ //is this a new session? this check is not enough if using auto-delegate (more on next module)
            const persistentAttributes = await attributesManager.getPersistentAttributes() || {};
            console.log('Loading from persistent storage: ' + JSON.stringify(persistentAttributes));
            //copy persistent attribute to session attributes
            attributesManager.setSessionAttributes(persistentAttributes); // ALL persistent attributtes are now session attributes
        }
    }
};

const LocalisationRequestInterceptor = {
    process(handlerInput) {
        i18n.init({
            lng: Alexa.getLocale(handlerInput.requestEnvelope),
            resources: languageStrings
        }).then((t) => {
            handlerInput.t = (...args) => t(...args);
        });
    }
};

const LoggingResponseInterceptor = {
    process(handlerInput, response) {
        console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope)}`);
    }
};

/**
 * This handler acts as the entry point for the skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        RegisterNameIntentHandler,
        ChooseAttractionIntentHandler,
        VisitCityIntentHandler,
        InterestedInFoodIntentHandler,
        InterestedInPlacesIntentHandler,
        InternationalFoodIntentHandler,
        MonarkIntentHandler,
        SommelierIntentHandler,
        RomanianFoodIntentHandler,
        OgradaIntentHandler,
        SergianaIntentHandler,
        MediterraneanFoodIntentHandler,
        VinoESaporiIntentHandler,
        CucininoIntentHandler,
        GoodbyeIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalisationRequestInterceptor,
        LoggingRequestInterceptor,
        LoadAttributesRequestInterceptor)
    .addResponseInterceptors(
        LoggingResponseInterceptor,
        SaveAttributesResponseInterceptor)
    .withPersistenceAdapter(persistenceAdapter)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();