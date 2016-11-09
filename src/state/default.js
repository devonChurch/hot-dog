const state = {

    createState: {
        isActive: false,
        color: 'gray',
        topicKey: 0,
        text: ''
    },

    topicState: [
        {
			heading: 'Positive',
			color: 'green'
		},
        {
			heading: 'Negative',
			color: 'red'
		},
        {
			heading: 'Ideas',
			color: 'orange'
		},
        {
			heading: 'Thanks',
			color: 'blue'
		}
    ],

    feedbackState: [
        [
            {
                badge: 'cake',
                name: 'Mr Potato',
                rating: 0,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                isRatingToggled: false,
                isOptionsActive: false
            },
            {
                badge: 'cake',
                name: 'Mr Sassuage',
                rating: 5,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                isRatingToggled: false,
                isOptionsActive: false
            }
        ],
        [],
        [],
        []
    ]

};

export default state;
