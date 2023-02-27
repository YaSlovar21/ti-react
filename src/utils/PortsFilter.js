function PortsFilter(ports, selectedDu) {
    const result = ports.filter((portElem)=> {
        if (portElem.du === selectedDu) {
            return true;
        }
        return false;
    });
    return result;
}

export default PortsFilter;