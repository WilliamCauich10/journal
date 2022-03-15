// es reactivo y cuando se modifique se llamaran a todos los que usen el state
export default () => ({
    isLoading: true,
    entries: [
        {
            id: '1', //16326565656
            date: new Date().toDateString(), //sat 23, julio
            text: 'Aute velit veniam aliqua et esse minim velit deserunt adipisicing ex fugiat nostrud quis. Eiusmod reprehenderit esse eu sint incididunt velit mollit id excepteur aliqua id pariatur. Nostrud irure in ut qui amet cupidatat. Labore in sint commodo occaecat dolore ad reprehenderit esse.',
            picture: null, // https://
        },
        {
            id: '2', //16326565656
            date: new Date().toDateString(), //sat 23, julio
            text: 'Veniam commodo do id sit. Magna excepteur mollit adipisicing dolore id ex non dolor consectetur incididunt sunt labore eiusmod. Veniam et sunt Lorem aliqua elit amet dolore commodo cupidatat adipisicing. Magna mollit aliqua incididunt eu laboris pariatur commodo aliquip deserunt nisi sunt. Laboris sit officia do est magna tempor. Ullamco minim pariatur excepteur anim aliquip elit eiusmod occaecat consectetur velit dolore consequat fugiat cupidatat.',
            picture: null, // https://
        },
        {
            id: '3', //16326565656
            date: new Date().toDateString(), //sat 23, julio
            text: 'Magna sunt exercitation cillum voluptate aliquip. Do esse pariatur et consectetur voluptate velit laboris velit veniam velit. Culpa reprehenderit ipsum cillum adipisicing deserunt exercitation enim ad incididunt sit ea excepteur.',
            picture: null, // https://
        }
    ]
})