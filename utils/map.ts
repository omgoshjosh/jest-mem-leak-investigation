const _maps: Record<string, any> = {};
const _markers: Record<string, object> = {};
const _radiusCaches: Record<string, number> = {};

class MapUtils {
    getMap(mapId: string) {
        return _maps[mapId];
    }
    
    getMapMarkers(mapId: string) {
        return _markers[mapId];
    }
    
    getRadiusCache(infoViewSectionId: string) {
        return _radiusCaches[infoViewSectionId];
    }
    
    setMap(mapId: string, map: any) {
        _maps[mapId] = map;
    }
    
    setMapMarkers(mapId: string, mapMarkers: object) {
        _markers[mapId] = mapMarkers;
    }
    
    setRadiusCache(infoViewSectionId: string, radius: number) {
        _radiusCaches[infoViewSectionId] = radius;
    }
}

export default new MapUtils();
