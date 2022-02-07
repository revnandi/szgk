const COCKPIT_URL = 'https://admin.szolidarisgazdasagkozpont.hu/';
const COCKPIT_READ_TOKEN = 'dfbd5e87975a88b3df7f9dc4acc6c1';

export const getImageUrl = (path) => {
    return (
        (path && `${COCKPIT_URL}/storage/uploads/${path.replace(/^\//, '')}`) ||
        null
    );
};

export const getThumbnailUrl = (id, width, height) => {
    return `${COCKPIT_URL}api/cockpit/image?token=${COCKPIT_READ_TOKEN}&src=${id}&w=${width}&h=${height}`;
};

export const getCollectionUrl = (collection) => {
    return `${COCKPIT_URL}api/collections/get/${collection}?token=${COCKPIT_READ_TOKEN}`;
};

export const getSingletonUrl = (singleton) => {
    return `${COCKPIT_URL}api/singletons/get/${singleton}?token=${COCKPIT_READ_TOKEN}`;
};
