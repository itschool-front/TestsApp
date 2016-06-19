(function () {
    angular.module('app.testAPIMock', ['ngMockE2E'])
        .run(function ($httpBackend) {


            var testsAvailable = [
                {
                    "description": "Основы HTML и Web",
                    "isPublic": true,
                    "startDate": "2016-04-01T00:00:00.000Z",
                    "endDate": "2016-08-30T00:00:00.000Z",
                    "id": 5,
                    "createdAt": "2016-06-19T14:37:28.000Z",
                    "updatedAt": "2016-06-19T17:18:56.000Z"
                },
                {
                    "description": "HTML basic",
                    "isPublic": true,
                    "startDate": "2016-04-01T00:00:00.000Z",
                    "endDate": "2016-08-30T00:00:00.000Z",
                    "id": 2,
                    "createdAt": "2016-05-21T08:38:56.000Z",
                    "updatedAt": "2016-06-19T19:16:41.000Z"
                }
            ];


            var answers = [
                {
                    "answers": [
                        {
                            "description": "h1[all] { background-color: white }",
                            "picture": null,
                            "isHidden": false,
                            "question": 7,
                            "pictureFd": null,
                            "id": 18,
                            "createdAt": "2016-06-19T06:20:29.000Z",
                            "updatedAt": "2016-06-19T06:20:29.000Z"
                        },
                        {
                            "description": "h1#all { background-color: white }",
                            "picture": null,
                            "isHidden": false,
                            "question": 7,
                            "pictureFd": null,
                            "id": 19,
                            "createdAt": "2016-06-19T06:20:31.000Z",
                            "updatedAt": "2016-06-19T06:20:31.000Z"
                        },
                        {
                            "description": "h1.all { background-color: white }",
                            "picture": null,
                            "isHidden": false,
                            "question": 7,
                            "pictureFd": null,
                            "id": 20,
                            "createdAt": "2016-06-19T06:20:25.000Z",
                            "updatedAt": "2016-06-19T06:20:25.000Z"
                        },
                        {
                            "description": "h1.all { background-color: white }",
                            "picture": null,
                            "isHidden": false,
                            "question": 7,
                            "pictureFd": null,
                            "id": 21,
                            "createdAt": "2016-06-19T06:20:27.000Z",
                            "updatedAt": "2016-06-19T06:20:27.000Z"
                        },
                        {
                            "description": "h1 { background-color: white }",
                            "picture": null,
                            "isHidden": false,
                            "question": 7,
                            "pictureFd": null,
                            "id": 22,
                            "createdAt": "2016-06-19T06:20:23.000Z",
                            "updatedAt": "2016-06-19T06:20:23.000Z"
                        }
                    ],
                    "test": {
                        "description": "Основы HTML и Web",
                        "isPublic": true,
                        "startDate": "2016-04-01T00:00:00.000Z",
                        "endDate": "2016-08-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 5,
                        "createdAt": "2016-06-19T14:37:28.000Z",
                        "updatedAt": "2016-06-19T17:18:56.000Z"
                    },
                    "description": "Как добавить фоновый цвет ко всем элементам <h1>?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 7,
                    "createdAt": "2016-05-21T08:43:19.000Z",
                    "updatedAt": "2016-05-21T08:43:19.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "div - является строчным элементом, а span - блочным",
                            "picture": null,
                            "isHidden": false,
                            "question": 10,
                            "pictureFd": null,
                            "id": 31,
                            "createdAt": "2016-06-19T06:21:10.000Z",
                            "updatedAt": "2016-06-19T06:21:10.000Z"
                        },
                        {
                            "description": "span - является строчным элементом, а div - блочным ",
                            "picture": null,
                            "isHidden": false,
                            "question": 10,
                            "pictureFd": null,
                            "id": 32,
                            "createdAt": "2016-06-19T06:21:13.000Z",
                            "updatedAt": "2016-06-19T06:21:13.000Z"
                        },
                        {
                            "description": "нет разницы",
                            "picture": null,
                            "isHidden": false,
                            "question": 10,
                            "pictureFd": null,
                            "id": 33,
                            "createdAt": "2016-06-19T06:21:15.000Z",
                            "updatedAt": "2016-06-19T06:21:15.000Z"
                        },
                        {
                            "description": "тег span не надо закрывать",
                            "picture": null,
                            "isHidden": false,
                            "question": 10,
                            "pictureFd": null,
                            "id": 34,
                            "createdAt": "2016-06-19T06:21:17.000Z",
                            "updatedAt": "2016-06-19T06:21:17.000Z"
                        }
                    ],
                    "test": {
                        "description": "Основы HTML и Web",
                        "isPublic": true,
                        "startDate": "2016-04-01T00:00:00.000Z",
                        "endDate": "2016-08-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 5,
                        "createdAt": "2016-06-19T14:37:28.000Z",
                        "updatedAt": "2016-06-19T17:18:56.000Z"
                    },
                    "description": "В чем отличие тегов <div> и <span>?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 10,
                    "createdAt": "2016-05-21T08:43:28.000Z",
                    "updatedAt": "2016-05-21T08:43:28.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "dd",
                            "picture": null,
                            "isHidden": false,
                            "question": 11,
                            "pictureFd": null,
                            "id": 35,
                            "createdAt": "2016-06-19T06:21:25.000Z",
                            "updatedAt": "2016-06-19T06:21:25.000Z"
                        },
                        {
                            "description": "hq",
                            "picture": null,
                            "isHidden": false,
                            "question": 11,
                            "pictureFd": null,
                            "id": 36,
                            "createdAt": "2016-06-19T06:21:30.000Z",
                            "updatedAt": "2016-06-19T06:21:30.000Z"
                        },
                        {
                            "description": "ol",
                            "picture": null,
                            "isHidden": false,
                            "question": 11,
                            "pictureFd": null,
                            "id": 37,
                            "createdAt": "2016-06-19T06:21:32.000Z",
                            "updatedAt": "2016-06-19T06:21:32.000Z"
                        },
                        {
                            "description": "dt",
                            "picture": null,
                            "isHidden": false,
                            "question": 11,
                            "pictureFd": null,
                            "id": 38,
                            "createdAt": "2016-06-19T06:21:27.000Z",
                            "updatedAt": "2016-06-19T06:21:27.000Z"
                        },
                        {
                            "description": "ul",
                            "picture": null,
                            "isHidden": false,
                            "question": 11,
                            "pictureFd": null,
                            "id": 39,
                            "createdAt": "2016-06-19T06:21:34.000Z",
                            "updatedAt": "2016-06-19T06:21:34.000Z"
                        }
                    ],
                    "test": {
                        "description": "Основы HTML и Web",
                        "isPublic": true,
                        "startDate": "2016-04-01T00:00:00.000Z",
                        "endDate": "2016-08-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 5,
                        "createdAt": "2016-06-19T14:37:28.000Z",
                        "updatedAt": "2016-06-19T17:18:56.000Z"
                    },
                    "description": "Чтобы организовать ненумерованный список необходимо использовать тег",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 11,
                    "createdAt": "2016-05-21T08:43:31.000Z",
                    "updatedAt": "2016-05-21T08:43:31.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "В любом случае.",
                            "picture": null,
                            "isHidden": false,
                            "question": 12,
                            "pictureFd": null,
                            "id": 40,
                            "createdAt": "2016-06-19T06:21:42.000Z",
                            "updatedAt": "2016-06-19T06:21:42.000Z"
                        },
                        {
                            "description": "Только, если они применяются к разным элементам.",
                            "picture": null,
                            "isHidden": false,
                            "question": 12,
                            "pictureFd": null,
                            "id": 41,
                            "createdAt": "2016-06-19T06:21:52.000Z",
                            "updatedAt": "2016-06-19T06:21:52.000Z"
                        },
                        {
                            "description": "Только, если в коде они встречаются один раз.",
                            "picture": null,
                            "isHidden": false,
                            "question": 12,
                            "pictureFd": null,
                            "id": 42,
                            "createdAt": "2016-06-19T06:21:47.000Z",
                            "updatedAt": "2016-06-19T06:21:47.000Z"
                        },
                        {
                            "description": "Никогда, это недопустимо.",
                            "picture": null,
                            "isHidden": false,
                            "question": 12,
                            "pictureFd": null,
                            "id": 43,
                            "createdAt": "2016-06-19T06:21:44.000Z",
                            "updatedAt": "2016-06-19T06:21:44.000Z"
                        },
                        {
                            "description": "Только, если они применяются к одному элементу.",
                            "picture": null,
                            "isHidden": false,
                            "question": 12,
                            "pictureFd": null,
                            "id": 44,
                            "createdAt": "2016-06-19T06:21:49.000Z",
                            "updatedAt": "2016-06-19T06:21:49.000Z"
                        }
                    ],
                    "test": {
                        "description": "Основы HTML и Web",
                        "isPublic": true,
                        "startDate": "2016-04-01T00:00:00.000Z",
                        "endDate": "2016-08-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 5,
                        "createdAt": "2016-06-19T14:37:28.000Z",
                        "updatedAt": "2016-06-19T17:18:56.000Z"
                    },
                    "description": "В каких ситуациях имена идентификаторов и классов можно называть одинаково?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 12,
                    "createdAt": "2016-05-21T08:43:33.000Z",
                    "updatedAt": "2016-05-21T08:43:33.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "div:first {…}",
                            "picture": null,
                            "isHidden": false,
                            "question": 6,
                            "pictureFd": null,
                            "id": 13,
                            "createdAt": "2016-06-19T06:20:15.000Z",
                            "updatedAt": "2016-06-19T06:20:15.000Z"
                        },
                        {
                            "description": ".block {…}",
                            "picture": null,
                            "isHidden": false,
                            "question": 6,
                            "pictureFd": null,
                            "id": 14,
                            "createdAt": "2016-06-19T06:20:07.000Z",
                            "updatedAt": "2016-06-19T06:20:07.000Z"
                        },
                        {
                            "description": ".select .block {…}",
                            "picture": null,
                            "isHidden": false,
                            "question": 6,
                            "pictureFd": null,
                            "id": 15,
                            "createdAt": "2016-06-19T06:20:08.000Z",
                            "updatedAt": "2016-06-19T06:20:08.000Z"
                        },
                        {
                            "description": ".select.block {…} ",
                            "picture": null,
                            "isHidden": false,
                            "question": 6,
                            "pictureFd": null,
                            "id": 16,
                            "createdAt": "2016-06-19T06:20:12.000Z",
                            "updatedAt": "2016-06-19T06:20:12.000Z"
                        },
                        {
                            "description": ".select {...}",
                            "picture": null,
                            "isHidden": false,
                            "question": 6,
                            "pictureFd": null,
                            "id": 17,
                            "createdAt": "2016-06-19T06:20:10.000Z",
                            "updatedAt": "2016-06-19T06:20:10.000Z"
                        }
                    ],
                    "test": {
                        "description": "Основы HTML и Web",
                        "isPublic": true,
                        "startDate": "2016-04-01T00:00:00.000Z",
                        "endDate": "2016-08-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 5,
                        "createdAt": "2016-06-19T14:37:28.000Z",
                        "updatedAt": "2016-06-19T17:18:56.000Z"
                    },
                    "description": "Как задать стиль только для первого блока?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": ".tmp/uploads/6a0e3f31-1d55-40a7-a277-4cfc687f3439",
                    "id": 6,
                    "createdAt": "2016-05-23T11:50:21.000Z",
                    "updatedAt": "2016-05-23T11:50:21.000Z"
                },
                {
                    "answers": [],
                    "test": {
                        "description": "Основы HTML и Web",
                        "isPublic": true,
                        "startDate": "2016-04-01T00:00:00.000Z",
                        "endDate": "2016-08-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 5,
                        "createdAt": "2016-06-19T14:37:28.000Z",
                        "updatedAt": "2016-06-19T17:18:56.000Z"
                    },
                    "description": "Ваш отзыв:",
                    "answerType": "free",
                    "isHidden": false,
                    "pictureFd": ".tmp/uploads/60d80951-255f-486a-be00-b2a134c17b54",
                    "id": 14,
                    "createdAt": "2016-05-23T11:52:12.000Z",
                    "updatedAt": "2016-05-23T11:52:12.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "24pt",
                            "picture": null,
                            "isHidden": false,
                            "question": 13,
                            "pictureFd": null,
                            "id": 45,
                            "createdAt": "2016-06-19T06:22:05.000Z",
                            "updatedAt": "2016-06-19T06:22:05.000Z"
                        },
                        {
                            "description": "36pt",
                            "picture": null,
                            "isHidden": false,
                            "question": 13,
                            "pictureFd": null,
                            "id": 46,
                            "createdAt": "2016-06-19T06:22:10.000Z",
                            "updatedAt": "2016-06-19T06:22:10.000Z"
                        },
                        {
                            "description": "48pt",
                            "picture": null,
                            "isHidden": false,
                            "question": 13,
                            "pictureFd": null,
                            "id": 47,
                            "createdAt": "2016-06-19T06:22:12.000Z",
                            "updatedAt": "2016-06-19T06:22:12.000Z"
                        },
                        {
                            "description": "18pt ",
                            "picture": null,
                            "isHidden": false,
                            "question": 13,
                            "pictureFd": null,
                            "id": 48,
                            "createdAt": "2016-06-19T06:22:03.000Z",
                            "updatedAt": "2016-06-19T06:22:03.000Z"
                        },
                        {
                            "description": "12pt",
                            "picture": null,
                            "isHidden": false,
                            "question": 13,
                            "pictureFd": null,
                            "id": 49,
                            "createdAt": "2016-06-19T06:22:00.000Z",
                            "updatedAt": "2016-06-19T06:22:00.000Z"
                        }
                    ],
                    "test": {
                        "description": "Основы HTML и Web",
                        "isPublic": true,
                        "startDate": "2016-04-01T00:00:00.000Z",
                        "endDate": "2016-08-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 5,
                        "createdAt": "2016-06-19T14:37:28.000Z",
                        "updatedAt": "2016-06-19T17:18:56.000Z"
                    },
                    "description": "Какой размер в пунктах будет у текста <p><span>Пример текста</span></p>, если на странице задан следующий стиль?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": ".tmp/uploads/90252895-2b5b-416c-ba90-51c3e33b769e",
                    "id": 13,
                    "createdAt": "2016-05-23T11:52:18.000Z",
                    "updatedAt": "2016-05-23T11:52:18.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "Yes",
                            "picture": null,
                            "isHidden": false,
                            "question": 1,
                            "pictureFd": null,
                            "id": 1,
                            "createdAt": "2016-06-19T06:16:46.000Z",
                            "updatedAt": "2016-06-19T06:16:46.000Z"
                        },
                        {
                            "description": "No",
                            "picture": null,
                            "isHidden": false,
                            "question": 1,
                            "pictureFd": null,
                            "id": 2,
                            "createdAt": "2016-06-19T06:16:36.000Z",
                            "updatedAt": "2016-06-19T06:16:36.000Z"
                        }
                    ],
                    "test": {
                        "description": "Java basic",
                        "isPublic": true,
                        "startDate": "2016-04-04T00:00:00.000Z",
                        "endDate": "2016-04-20T00:00:00.000Z",
                        "isHidden": false,
                        "id": 1,
                        "createdAt": "2016-05-21T08:39:00.000Z",
                        "updatedAt": "2016-06-19T14:49:19.000Z"
                    },
                    "description": "is this test new?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": ".tmp/uploads/b033eaf5-1476-45ec-913e-3c049d273ba9",
                    "id": 1,
                    "createdAt": "2016-06-07T08:29:36.000Z",
                    "updatedAt": "2016-06-07T08:31:49.000Z"
                },
                {
                    "answers": [],
                    "test": {
                        "description": "Programming",
                        "isPublic": true,
                        "startDate": "2016-04-30T00:00:00.000Z",
                        "endDate": "2016-05-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 6,
                        "createdAt": "2016-05-21T08:39:09.000Z",
                        "updatedAt": "2016-06-19T14:49:28.000Z"
                    },
                    "description": "What is recursion",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 15,
                    "createdAt": "2016-06-07T08:45:52.000Z",
                    "updatedAt": "2016-06-07T08:45:52.000Z"
                },
                {
                    "answers": [],
                    "test": {
                        "description": "Programming",
                        "isPublic": true,
                        "startDate": "2016-04-30T00:00:00.000Z",
                        "endDate": "2016-05-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 6,
                        "createdAt": "2016-05-21T08:39:09.000Z",
                        "updatedAt": "2016-06-19T14:49:28.000Z"
                    },
                    "description": "Compiler is a piece of software, that:",
                    "answerType": "multi",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 16,
                    "createdAt": "2016-06-13T11:02:18.000Z",
                    "updatedAt": "2016-06-13T11:02:18.000Z"
                },
                {
                    "answers": [],
                    "description": "Это первый вопрос?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 17,
                    "createdAt": "2016-06-14T10:34:06.000Z",
                    "updatedAt": "2016-06-14T10:34:06.000Z"
                },
                {
                    "answers": [],
                    "description": "Это первый вопрос?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 18,
                    "createdAt": "2016-06-14T10:39:06.000Z",
                    "updatedAt": "2016-06-14T10:39:06.000Z"
                },
                {
                    "answers": [],
                    "description": "123456789",
                    "answerType": "free",
                    "isHidden": false,
                    "pictureFd": ".tmp/uploads/227805fc-38ab-4f47-aa23-6a9a955cc398",
                    "id": 19,
                    "createdAt": "2016-06-14T10:49:23.000Z",
                    "updatedAt": "2016-06-14T10:49:24.000Z"
                },
                {
                    "answers": [],
                    "description": "777777",
                    "answerType": "free",
                    "isHidden": false,
                    "pictureFd": ".tmp/uploads/1e7cd055-1707-4b1b-a427-330a726cc53e",
                    "id": 20,
                    "createdAt": "2016-06-14T10:57:08.000Z",
                    "updatedAt": "2016-06-14T10:57:08.000Z"
                },
                {
                    "answers": [],
                    "test": {
                        "description": "465",
                        "isPublic": false,
                        "startDate": null,
                        "endDate": null,
                        "isHidden": false,
                        "id": 15,
                        "createdAt": "2016-06-14T10:59:37.000Z",
                        "updatedAt": "2016-06-19T17:39:56.000Z"
                    },
                    "description": "88888",
                    "answerType": "free",
                    "isHidden": false,
                    "pictureFd": ".tmp/uploads/2d1b14d1-4610-4bbf-af61-8a5e4da27d9f",
                    "id": 21,
                    "createdAt": "2016-06-14T11:00:49.000Z",
                    "updatedAt": "2016-06-14T11:00:49.000Z"
                },
                {
                    "answers": [],
                    "test": {
                        "description": "Насколько хороша у Вас ло",
                        "isPublic": false,
                        "startDate": null,
                        "endDate": null,
                        "isHidden": false,
                        "id": 16,
                        "createdAt": "2016-06-14T11:20:57.000Z",
                        "updatedAt": "2016-06-19T13:27:10.000Z"
                    },
                    "description": "А больше Б в 9 раз, Б меньше В в 4 раза",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": ".tmp/uploads/0bf38c29-eba1-469a-b946-6e6da1ed3374",
                    "id": 22,
                    "createdAt": "2016-06-14T11:21:02.000Z",
                    "updatedAt": "2016-06-14T11:21:02.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "А",
                            "picture": null,
                            "isHidden": false,
                            "question": 3,
                            "pictureFd": null,
                            "id": 3,
                            "createdAt": "2016-06-19T06:18:19.000Z",
                            "updatedAt": "2016-06-19T06:18:19.000Z"
                        },
                        {
                            "description": "Б",
                            "picture": null,
                            "isHidden": false,
                            "question": 3,
                            "pictureFd": null,
                            "id": 4,
                            "createdAt": "2016-06-19T06:18:54.000Z",
                            "updatedAt": "2016-06-19T06:18:54.000Z"
                        }
                    ],
                    "test": {
                        "description": "Пример для теста",
                        "isPublic": false,
                        "startDate": "2014-04-01T00:00:00.000Z",
                        "endDate": "2018-04-02T00:00:00.000Z",
                        "isHidden": false,
                        "id": 17,
                        "createdAt": "2016-06-18T20:13:14.000Z",
                        "updatedAt": "2016-06-19T00:29:45.000Z"
                    },
                    "description": "Выберите цифру 1 на картинках",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 3,
                    "createdAt": "2016-05-21T08:41:12.000Z",
                    "updatedAt": "2016-06-18T20:13:15.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "src",
                            "picture": null,
                            "isHidden": false,
                            "question": 8,
                            "pictureFd": null,
                            "id": 23,
                            "createdAt": "2016-06-19T06:20:44.000Z",
                            "updatedAt": "2016-06-19T06:20:44.000Z"
                        },
                        {
                            "description": "width",
                            "picture": null,
                            "isHidden": false,
                            "question": 8,
                            "pictureFd": null,
                            "id": 24,
                            "createdAt": "2016-06-19T06:20:48.000Z",
                            "updatedAt": "2016-06-19T06:20:48.000Z"
                        },
                        {
                            "description": "title ",
                            "picture": null,
                            "isHidden": false,
                            "question": 8,
                            "pictureFd": null,
                            "id": 25,
                            "createdAt": "2016-06-19T06:20:46.000Z",
                            "updatedAt": "2016-06-19T06:20:46.000Z"
                        },
                        {
                            "description": "alt",
                            "picture": null,
                            "isHidden": false,
                            "question": 8,
                            "pictureFd": null,
                            "id": 26,
                            "createdAt": "2016-06-19T06:20:41.000Z",
                            "updatedAt": "2016-06-19T06:20:41.000Z"
                        }
                    ],
                    "test": {
                        "description": "Пример для теста",
                        "isPublic": false,
                        "startDate": "2014-04-01T00:00:00.000Z",
                        "endDate": "2018-04-02T00:00:00.000Z",
                        "isHidden": false,
                        "id": 17,
                        "createdAt": "2016-06-18T20:13:14.000Z",
                        "updatedAt": "2016-06-19T00:29:45.000Z"
                    },
                    "description": "Чтобы задать всплывающую подсказку при наведении на изображение необходимо использовать атрибут:",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 8,
                    "createdAt": "2016-05-23T11:51:19.000Z",
                    "updatedAt": "2016-06-18T20:13:15.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "span",
                            "picture": null,
                            "isHidden": false,
                            "question": 9,
                            "pictureFd": null,
                            "id": 27,
                            "createdAt": "2016-06-19T06:21:02.000Z",
                            "updatedAt": "2016-06-19T06:21:02.000Z"
                        },
                        {
                            "description": "p",
                            "picture": null,
                            "isHidden": false,
                            "question": 9,
                            "pictureFd": null,
                            "id": 28,
                            "createdAt": "2016-06-19T06:21:00.000Z",
                            "updatedAt": "2016-06-19T06:21:00.000Z"
                        },
                        {
                            "description": "div",
                            "picture": null,
                            "isHidden": false,
                            "question": 9,
                            "pictureFd": null,
                            "id": 29,
                            "createdAt": "2016-06-19T06:20:56.000Z",
                            "updatedAt": "2016-06-19T06:20:56.000Z"
                        },
                        {
                            "description": "img",
                            "picture": null,
                            "isHidden": false,
                            "question": 9,
                            "pictureFd": null,
                            "id": 30,
                            "createdAt": "2016-06-19T06:20:58.000Z",
                            "updatedAt": "2016-06-19T06:20:58.000Z"
                        }
                    ],
                    "test": {
                        "description": "Пример для теста",
                        "isPublic": false,
                        "startDate": "2014-04-01T00:00:00.000Z",
                        "endDate": "2018-04-02T00:00:00.000Z",
                        "isHidden": false,
                        "id": 17,
                        "createdAt": "2016-06-18T20:13:14.000Z",
                        "updatedAt": "2016-06-19T00:29:45.000Z"
                    },
                    "description": "Какие из перечисленных ниже тегов являются блочными?",
                    "answerType": "multi",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 9,
                    "createdAt": "2016-05-23T11:51:42.000Z",
                    "updatedAt": "2016-06-18T20:13:15.000Z"
                },
                {
                    "answers": [],
                    "test": {
                        "description": "Пример для теста",
                        "isPublic": false,
                        "startDate": "2014-04-01T00:00:00.000Z",
                        "endDate": "2018-04-02T00:00:00.000Z",
                        "isHidden": false,
                        "id": 17,
                        "createdAt": "2016-06-18T20:13:14.000Z",
                        "updatedAt": "2016-06-19T00:29:45.000Z"
                    },
                    "description": "Это тестовый тест?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 23,
                    "createdAt": "2016-06-18T20:18:19.000Z",
                    "updatedAt": "2016-06-18T20:18:19.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "Yes",
                            "picture": null,
                            "isHidden": false,
                            "question": 2,
                            "pictureFd": null,
                            "id": 50,
                            "createdAt": "2016-06-19T06:12:46.000Z",
                            "updatedAt": "2016-06-19T06:12:46.000Z"
                        },
                        {
                            "description": "No",
                            "picture": null,
                            "isHidden": false,
                            "question": 2,
                            "pictureFd": null,
                            "id": 51,
                            "createdAt": "2016-06-19T14:18:41.000Z",
                            "updatedAt": "2016-06-19T14:18:41.000Z"
                        }
                    ],
                    "test": {
                        "description": "HTML basic",
                        "isPublic": true,
                        "startDate": "2016-04-01T00:00:00.000Z",
                        "endDate": "2016-08-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 2,
                        "createdAt": "2016-05-21T08:38:56.000Z",
                        "updatedAt": "2016-06-19T19:33:53.000Z"
                    },
                    "description": "Is HTML a programming language?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 2,
                    "createdAt": "2016-06-19T14:16:15.000Z",
                    "updatedAt": "2016-06-19T14:16:15.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "display:table",
                            "picture": null,
                            "isHidden": false,
                            "question": 4,
                            "pictureFd": null,
                            "id": 5,
                            "createdAt": "2016-06-19T18:29:44.000Z",
                            "updatedAt": "2016-06-19T18:29:44.000Z"
                        },
                        {
                            "description": "clear: both ",
                            "picture": null,
                            "isHidden": false,
                            "question": 4,
                            "pictureFd": null,
                            "id": 6,
                            "createdAt": "2016-06-19T19:02:36.000Z",
                            "updatedAt": "2016-06-19T19:02:36.000Z"
                        },
                        {
                            "description": "<br />",
                            "picture": null,
                            "isHidden": false,
                            "question": 4,
                            "pictureFd": ".tmp/uploads/a0c2ec5c-1ac2-4db9-b943-0e9b6e8221bb",
                            "id": 7,
                            "createdAt": "2016-06-19T14:36:06.000Z",
                            "updatedAt": "2016-06-19T14:36:06.000Z"
                        }
                    ],
                    "test": {
                        "description": "Основы HTML и Web",
                        "isPublic": true,
                        "startDate": "2016-04-01T00:00:00.000Z",
                        "endDate": "2016-08-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 5,
                        "createdAt": "2016-06-19T14:37:28.000Z",
                        "updatedAt": "2016-06-19T17:18:56.000Z"
                    },
                    "description": "Чем очищается поток?",
                    "answerType": "single",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 4,
                    "createdAt": "2016-06-19T14:36:10.000Z",
                    "updatedAt": "2016-06-19T14:36:10.000Z"
                },
                {
                    "answers": [
                        {
                            "description": "<a id=\"a\" href=\"#\">ссылка</a>",
                            "picture": null,
                            "isHidden": false,
                            "question": 5,
                            "pictureFd": null,
                            "id": 8,
                            "createdAt": "2016-06-19T06:19:55.000Z",
                            "updatedAt": "2016-06-19T06:19:55.000Z"
                        },
                        {
                            "description": "<a class=\"a id\" href=\"#\">ссылка</a>",
                            "picture": null,
                            "isHidden": false,
                            "question": 5,
                            "pictureFd": null,
                            "id": 9,
                            "createdAt": "2016-06-19T06:19:49.000Z",
                            "updatedAt": "2016-06-19T06:19:49.000Z"
                        },
                        {
                            "description": "<a href=\"#\">ссылка</a>",
                            "picture": null,
                            "isHidden": false,
                            "question": 5,
                            "pictureFd": null,
                            "id": 10,
                            "createdAt": "2016-06-19T06:19:53.000Z",
                            "updatedAt": "2016-06-19T06:19:53.000Z"
                        },
                        {
                            "description": "<a class=\"id\" href=\"#\">ссылка</a>",
                            "picture": null,
                            "isHidden": false,
                            "question": 5,
                            "pictureFd": null,
                            "id": 11,
                            "createdAt": "2016-06-19T06:19:51.000Z",
                            "updatedAt": "2016-06-19T06:19:51.000Z"
                        },
                        {
                            "description": "<a rel=\"id\" href=\"#\">ссылка</a>",
                            "picture": null,
                            "isHidden": false,
                            "question": 5,
                            "pictureFd": null,
                            "id": 12,
                            "createdAt": "2016-06-19T06:19:58.000Z",
                            "updatedAt": "2016-06-19T06:19:58.000Z"
                        }
                    ],
                    "test": {
                        "description": "Основы HTML и Web",
                        "isPublic": true,
                        "startDate": "2016-04-01T00:00:00.000Z",
                        "endDate": "2016-08-30T00:00:00.000Z",
                        "isHidden": false,
                        "id": 5,
                        "createdAt": "2016-06-19T14:37:28.000Z",
                        "updatedAt": "2016-06-19T17:18:56.000Z"
                    },
                    "description": "К какому элементу будет применяться селектор a.id?",
                    "answerType": "multi",
                    "isHidden": false,
                    "pictureFd": null,
                    "id": 5,
                    "createdAt": "2016-06-19T18:17:53.000Z",
                    "updatedAt": "2016-06-19T18:17:53.000Z"
                }
            ]


            $httpBackend.whenGET(/available/).respond(JSON.stringify(testsAvailable));

            $httpBackend.whenGET(/question/).respond(function (method, url, data) {
                
                var splitUrl = url.split('/');
                var testId = splitUrl[splitUrl.length-1];
                
                console.log(testId);
                
            });
















            $httpBackend.whenPOST(/getResult/)
                .respond(function (method, url, data) {

                    console.log(url, data);

                    return [200, data, {}];
                });

            $httpBackend.whenGET(/app/).passThrough();
            $httpBackend.whenGET(/test/).passThrough();
            $httpBackend.whenGET(/question/).passThrough();
            $httpBackend.whenPOST(/login/).passThrough();
            $httpBackend.whenPOST(/create/).passThrough();

        });
})();