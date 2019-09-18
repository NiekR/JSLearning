const double = number => 2 * number;
const double2 = () => 2;
const double3 = (number, number2) => 2 * number + 2 * number2;

double(8);

// this
const team = {
    members: ['Jane', 'Bill'],
    teamname: 'Squad',
    teamSummary: function () {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamname}`;
        });
    }
};

// ex 1
