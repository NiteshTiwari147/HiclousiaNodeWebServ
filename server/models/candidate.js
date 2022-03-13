const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EducationSchema = require('./education');
const ExperienceSchema = require('./experience');
const ProjectSchema = require('./project');
const ScorecardSchema = require('./scoreCard');
const SkillSetSchema = require('./skillSet');

const CandidateSchema = new Schema({
    id: { type: Schema.Types.ObjectId, },
    firstName: { type: String },
    lastName: { type: String },
    age: { type: String},
    email: { type: String },
    userName: {  type: String },
    EducationList:  [{
        type: EducationSchema,
        ref: 'education'
      }],
    ExperienceList: [
        {
            type: ExperienceSchema,
            ref: 'experience'
        }
    ],
    ProjectList: [
        {
            type: ProjectSchema,
            ref: 'project'
        }
    ],
    Scorecard: {
        type: ScorecardSchema,
        ref: 'scorecard'
    },
    SkillSet: {
        type: SkillSetSchema,
        ref: 'skillSet'
    }
});

CandidateSchema.statics.addEducation = function(school, degree, field_of_study, start_year, end_year, grade, email) {
    const Education = mongoose.model('education'); 
    return this.findOne({ email })
        .then(candidate => {
            const education = new Education({school, degree, field_of_study, start_year, end_year, grade, email});
            candidate.EducationList.push(education);
            return Promise.all([education.save(), candidate.save()])
                .then(([education, candidate]) => candidate);
        });

}

CandidateSchema.statics.addExperience = function(email, organisation, position, start_year, end_year, current) {
    const Experience = mongoose.model('experience');
    return this.findOne({ email })
        .then(candidate => {
            const experience = new Experience({email, organisation, position, start_year, end_year, current});
            candidate.ExperienceList.push(experience);

            return Promise.all([experience.save(), candidate.save()])
            .then(([experience, candidate]) => candidate);
        })
}

CandidateSchema.statics.addProject = function(email, title, problemStatement, solution, coreSkills, softSkills, duration) {
    const Project = mongoose.model('project');
    return this.findOne({email})
        .then(candidate => {
            const project = new Project({email, title, problemStatement, solution, coreSkills, softSkills, duration});
            candidate.ProjectList.push(project);
            return Promise.all([project.save(), candidate.save()])
            .then(([project, candidate]) => candidate);
        })
}

CandidateSchema.statics.updateSkill = function(email, coreSkills, softSkills) {
    //function to maintain SkillSet
    const SkillSet =  mongoose.model('skillSet');
    return this.findOne({email})
        .then(candidate => {
            if(candidate.SkillSet) {
                SkillSet.updateSkillSet(email,coreSkills, softSkills);
            }
            else {
                const skillList = [];
                coreSkills.map(skill => {
                    skillList.push({
                        skillName: skill.toLowerCase(),
                        skillPoint: 1
                    })
                });
                softSkills.map(skill => {
                    skillList.push({
                        skillName: skill.toLowerCase(),
                        skillPoint: 1
                    })
                });
                const skillSet = new SkillSet({
                    email,
                    skillSet: skillList
                });
                candidate.SkillSet = skillSet;
                return Promise.all([skillSet.save(), candidate.save()])
            }       
    })
}

CandidateSchema.statics.updateScore = function(email) {
    //function to maintain scorecard
    const Scorecard = mongoose.model('scorecard');
    return this.findOne({email})
        .then(candidate => {
            if(candidate.Scorecard) {
                Scorecard.updateScore(email);
            }
            else {
                const scoreCard = new Scorecard({email});
                candidate.Scorecard = scoreCard;
                return Promise.all([scoreCard.save(), candidate.save()])
            }
        })
}

CandidateSchema.statics.findEducation = function(email) {
    return this.findOne({ email })
        .then(candidate => {
            return candidate.EducationList;
    });
}

CandidateSchema.statics.findExperience = function(email) {
    return this.findOne({ email })
    .then(candidate => {
        return candidate.ExperienceList;
    });
}

CandidateSchema.statics.findScorecard = function(email) {
    const Scorecard = mongoose.model('scorecard');
    return Scorecard.getScorecard(email);
}
CandidateSchema.statics.findSkillSet = function(email) {
    const SkillSet =  mongoose.model('skillSet');
    return SkillSet.getSkillSet(email);
}

CandidateSchema.statics.findProject = function(email) {
    return this.findOne({ email })
    .then(candidate => {
        return candidate.ProjectList;
    });
}

mongoose.model('candidate', CandidateSchema);
  