/**
	Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
 */

module.exports = platformRequire; 
function platformRequire(packageName, platform) 
{
	if (!platform)
	{
		var cmdLineToolName = require('../package.json').name;
		throw Error(`You must specify a platform.  See '${cmdLineToolName} help ${packageName}' for more info.`);
	}
	try {
		var platformModule = require(`../src/${packageName}-${platform}`);
		return platformModule;
	} catch (error) {
		throw Error(`Invalid platform - ${platform}`);
	}
}
