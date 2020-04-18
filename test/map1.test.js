import { RAND_INT, RAND_STR } from './utils';

import MapUtils from '../utils/map';

describe('utils/map', () => {
    it('setMap/getMap', () => {
        const mapId = RAND_STR();
        const map = RAND_INT();

        MapUtils.setMap(mapId, map);

        expect(MapUtils.getMap(mapId)).toEqual(map);
    });

    it('setMapMarkers/getMapMarkers', () => {
        const mapId = RAND_STR();
        const mapMarkers = RAND_INT();

        MapUtils.setMapMarkers(mapId, mapMarkers);

        expect(MapUtils.getMapMarkers(mapId)).toEqual(mapMarkers);
    });

    it('setRadiusCaches/getRadiusCache', () => {
        const infoViewSectionId = RAND_STR();
        const radius = RAND_INT();

        MapUtils.setRadiusCache(infoViewSectionId, radius);

        expect(MapUtils.getRadiusCache(infoViewSectionId)).toEqual(radius);
    });
});
