import PageCommand from '../../js/enum/pageCommand'

const defaultActions = [{
    title: 'Copy title as a markdown link',
    actionType: PageCommand.COPY,
    extend: {
        template: '[{{title}}]({{url}})'
    }
}, {
    title: 'Copy selection text as a markdown link',
    actionType: PageCommand.COPY,
    extend: {
        template: '[{{selection}}]({{url}})'
    }
}, {
    title: 'Toggle TODO',
    desc: 'Add a bookmark and tag it with a TODO prefix / Remove bookmark',
    actionType: PageCommand.TOGGLE_TODO
}, {
    title: 'Toggle protection status',
    actionType: PageCommand.PAGE_PROTECT,
    desc: 'Not protected',
    extend: {
        protected: false,
    }
}];

function getUserActions() {
    return Promise.resolve([]);
}

export async function getGlobalActions() {
    const userActions = await getUserActions();

    return userActions.concat(defaultActions);
}