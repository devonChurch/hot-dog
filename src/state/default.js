const state = {

    createState: {
        isActive: false,
        color: 'gray',
        topicKey: null
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
                isOptionsActive: true,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                badge: 'cake',
                name: 'Mr Sassuage',
                rating: 5,
                isOptionsActive: false,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ],
        [],
        [],
        []
    ]

};

export default state;
