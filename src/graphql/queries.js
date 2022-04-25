/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChoice = /* GraphQL */ `
  query GetChoice($id: ID!) {
    getChoice(id: $id) {
      content
      id
      createdAt
      updatedAt
      questionChoicesId
    }
  }
`;
export const listChoices = /* GraphQL */ `
  query ListChoices(
    $filter: ModelChoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        id
        createdAt
        updatedAt
        questionChoicesId
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      content
      choices {
        items {
          content
          id
          createdAt
          updatedAt
          questionChoicesId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      presentationQuestionsId
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        choices {
          nextToken
        }
        id
        createdAt
        updatedAt
        presentationQuestionsId
      }
      nextToken
    }
  }
`;
export const getPresentation = /* GraphQL */ `
  query GetPresentation($id: ID!) {
    getPresentation(id: $id) {
      title
      description
      owner
      timestamp
      questions {
        items {
          content
          id
          createdAt
          updatedAt
          presentationQuestionsId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listPresentations = /* GraphQL */ `
  query ListPresentations(
    $filter: ModelPresentationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresentations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        description
        owner
        timestamp
        questions {
          nextToken
        }
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      title
      attendees {
        items {
          userId
          name
          email
          id
          createdAt
          updatedAt
          eventAttendeesId
        }
        nextToken
      }
      activeQuestion {
        content
        choices {
          nextToken
        }
        id
        createdAt
        updatedAt
        presentationQuestionsId
      }
      answers {
        items {
          questionText
          attendeeIdentifier
          choiceText
          id
          createdAt
          updatedAt
          eventAnswersId
          answerQuestionId
          answerAttendeeId
          answerChoiceId
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      eventActiveQuestionId
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        title
        attendees {
          nextToken
        }
        activeQuestion {
          content
          id
          createdAt
          updatedAt
          presentationQuestionsId
        }
        answers {
          nextToken
        }
        id
        createdAt
        updatedAt
        eventActiveQuestionId
      }
      nextToken
    }
  }
`;
export const getAttendee = /* GraphQL */ `
  query GetAttendee($id: ID!) {
    getAttendee(id: $id) {
      userId
      name
      email
      id
      createdAt
      updatedAt
      eventAttendeesId
    }
  }
`;
export const listAttendees = /* GraphQL */ `
  query ListAttendees(
    $filter: ModelAttendeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userId
        name
        email
        id
        createdAt
        updatedAt
        eventAttendeesId
      }
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      question {
        content
        choices {
          nextToken
        }
        id
        createdAt
        updatedAt
        presentationQuestionsId
      }
      questionText
      attendee {
        userId
        name
        email
        id
        createdAt
        updatedAt
        eventAttendeesId
      }
      attendeeIdentifier
      choice {
        content
        id
        createdAt
        updatedAt
        questionChoicesId
      }
      choiceText
      id
      createdAt
      updatedAt
      eventAnswersId
      answerQuestionId
      answerAttendeeId
      answerChoiceId
    }
  }
`;
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        question {
          content
          id
          createdAt
          updatedAt
          presentationQuestionsId
        }
        questionText
        attendee {
          userId
          name
          email
          id
          createdAt
          updatedAt
          eventAttendeesId
        }
        attendeeIdentifier
        choice {
          content
          id
          createdAt
          updatedAt
          questionChoicesId
        }
        choiceText
        id
        createdAt
        updatedAt
        eventAnswersId
        answerQuestionId
        answerAttendeeId
        answerChoiceId
      }
      nextToken
    }
  }
`;
