const WebSocket = require('ws');
const axios = require('axios');

const scratchCloud = "wss://clouddata.scratch.mit.edu";

class Cloud {
    constructor(user, session, project) {
        this.user = user;
        this.session = session;
        this.project = project;
        this.headers = {
            "Cookie": `scratchsessionsid=${this.session};`,
            "Origin": "https://scratch.mit.edu",
            "User-Agent": "Mozilla/5.0"
        };
    }

    setVar(name, val) {
        try {
            const garbage = parseInt(val);
        }
        catch (error) {
            console.error("ERROR: Cloud variable could not be set.");
        }

        if (val.length > 256) {
            console.error("ERROR: Cloud variable could not be set.");
        }

        const ws = new WebSocket(scratchCloud, { headers: this.headers });

        ws.on('open', () => {
            const message = JSON.stringify({
                method: "set",
                name: `☁ ${name}`,
                value: String(val),
                user: this.user,
                project_id: String(this.project)
            });
            ws.send(message);
            ws.close();
        });
        
        ws.on('error', (error) => {
            console.error("WebSocket error:", error);
        });
    }

    async getVar(name, limit = "1000") {
        try {
            const response = await axios.get(`https://clouddata.scratch.mit.edu/logs?projectid=${this.project}&limit=${limit}&offset=0`);
            const resp = response.data;
            for (const i of resp) {
                const x = i.name;
                if (x === `☁ ${name}`) {
                    return i.value;
                }
            }
        }
        catch (error) {
            console.error("ERROR: Cloud variable could not be read.");
        }
    }
}

module.exports = { Cloud };
