class Resident {
    name = "";
    address = "";
    rent = "";
    isAvailable = true;
}

class Condo extends Resident {
    roomNumber = "";
    hasFitness = true;
    hasPool = true;
}

class Townhouse extends Resident {
    floor = 0;
    
}

class House extends Resident {
    area = 0;
}
