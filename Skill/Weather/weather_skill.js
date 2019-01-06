/**
 * Weather Skill
 */
const Skill = girequire('src/Skill/skill');

module.exports = class WeatherSkill extends Skill {

/**
 * Constructor
 *
 * @param App app
 * @access public
 * @return void
 */
	constructor(app) {
		super(app);
	}

}