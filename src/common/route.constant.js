const PULBIC_ROUTE = {
    other : "*",
    landing : '/'
}

const RESTRICTED_ROUTE = {
    login : 'login',
    signup : 'signup'
}

const PRIVATE_ROUTE = {
    dashboard : 'dashboard',
    contacts : 'contacts',
    order :  'order'
}

const ROUTE_TYPE = {
    private : "private",
    public : "public",
    restricted : "restricted"
}

export {
    PRIVATE_ROUTE,
    PULBIC_ROUTE,
    ROUTE_TYPE,
    RESTRICTED_ROUTE
}