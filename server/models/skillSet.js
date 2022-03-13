const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({  
    skillName: {type: String},
    skillPoint:{ type: Number, default: 0 }
})

const SkillSetSchema = new Schema({
    email:  { type: String},
    skillSet: [
        {
            type: SkillSchema,
            ref: 'Skill'
        }
    ]
});

SkillSetSchema.statics.updateSkillSet = function(email,coreSkills,softSkills) {
    return this.findOne({email})
        .then(SkillSetObj => {
            var skillList = SkillSetObj.skillSet;
            coreSkills.map(skill => {
                let found_flag = false;
                for(let i=0; i<skillList.length; i++) {
                    if(skill === skillList[i].skillName) {
                        skillList[i].skillPoint++;
                        found_flag = true;
                        break;
                    }
                }
                if(found_flag === false) {
                    skillList.push({
                        skillName: skill.toLowerCase(),
                        skillPoint: 1
                    })
                }
            })
            softSkills.map(skill => {
                let found_flag = false;
                for(let i=0; i<skillList.length; i++) {
                    if(skill === skillList[i].skillName) {
                        skillList[i].skillPoint++;
                        found_flag = true;
                        break;
                    }
                }
                if(found_flag === false) {
                    skillList.push({
                        skillName: skill.toLowerCase(),
                        skillPoint: 1
                    })
                }
            })
            SkillSetObj.skillSet = skillList;
            return Promise.all[SkillSetObj.save()];
        })
}

SkillSetSchema.statics.getSkillSet = function(email) {
    return this.findOne({ email })
    .then(skillSet => {
        console.log(skillSet);
        return skillSet;
    });
}

mongoose.model('skillSet', SkillSetSchema);

module.exports = SkillSetSchema;