"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[8789],{6855:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=s(5893),t=s(1151);const o={id:"open-source-guidelines",title:"Open Source Contributing Guidelines",sidebar_label:"Open Source Guidelines",sidebar_position:2,description:"Guidelines for contributing to open source projects",keywords:["Open Source","Contributing","Guidelines","Open Source Contributing Guidelines","open source","open source guidelines","Open Source Projects"]},r=void 0,l={id:"introduction/open-source-guidelines",title:"Open Source Contributing Guidelines",description:"Guidelines for contributing to open source projects",source:"@site/docs/introduction/open-source-guidelines.md",sourceDirName:"introduction",slug:"/introduction/open-source-guidelines",permalink:"/docs/introduction/open-source-guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/introduction/open-source-guidelines.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"open-source-guidelines",title:"Open Source Contributing Guidelines",sidebar_label:"Open Source Guidelines",sidebar_position:2,description:"Guidelines for contributing to open source projects",keywords:["Open Source","Contributing","Guidelines","Open Source Contributing Guidelines","open source","open source guidelines","Open Source Projects"]},sidebar:"docSidebar",previous:{title:"Introduction to Defactor",permalink:"/docs/introduction/"},next:{title:"Agile Development Workflow",permalink:"/docs/introduction/agile-playbook"}},c={},d=[{value:"Development Process",id:"development-process",level:2},{value:"Branch Naming Convention",id:"branch-naming-convention",level:2},{value:"Pull Request General Guidelines",id:"pull-request-general-guidelines",level:2},{value:"Commit Message Guidelines",id:"commit-message-guidelines",level:2},{value:"Commit Message Format",id:"commit-message-format",level:3},{value:"Revert",id:"revert",level:3},{value:"Type",id:"type",level:3},{value:"Scope",id:"scope",level:3},{value:"Subject",id:"subject",level:3},{value:"Body",id:"body",level:3},{value:"Footer",id:"footer",level:3},{value:"Reporting Bugs",id:"reporting-bugs",level:2},{value:"Releases",id:"releases",level:2},{value:"Breaking.Feature.Fix",id:"breakingfeaturefix",level:4},{value:"Breaking",id:"breaking",level:5},{value:"Feature",id:"feature",level:5},{value:"Fix",id:"fix",level:5},{value:"Changelog Generation",id:"changelog-generation",level:3},{value:"Advanced Git Tools",id:"advanced-git-tools",level:2},{value:"Code Standards",id:"code-standards",level:2},{value:"Continuous Integration and Delivery",id:"continuous-integration-and-delivery",level:2},{value:"Pre-commit Hooks",id:"pre-commit-hooks",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"development-process",children:"Development Process"}),"\n",(0,i.jsxs)(n.p,{children:["We use a Kanban-style board to prioritize the work. For example this ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/defactor-com/projects/11/views/1",children:"Documentation Site's Project board"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["We have added a additional column to the default automated board in order to maintain a prioritized ",(0,i.jsx)(n.code,{children:"To Do"})," column."]}),"\n",(0,i.jsx)(n.p,{children:"When a new issues is create you need to explicitly use the project option on the GitHub issue to include it in the board; Once you do that it gets automatically added to the New Issues column."}),"\n",(0,i.jsxs)(n.p,{children:["Periodically we move the new Issues to the ",(0,i.jsx)(n.code,{children:"To Do"})," column and manually and give it the appropriate priority."]}),"\n",(0,i.jsxs)(n.p,{children:["When you start working on a task you must manually move it to ",(0,i.jsx)(n.code,{children:"In Progress"})," column."]}),"\n",(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.a,{href:"https://guides.github.com/introduction/flow/",children:"GitHub flow"})," to request code changes.\nWe develop on ",(0,i.jsx)(n.code,{children:"master"})," and ",(0,i.jsx)(n.code,{children:"release"})," using tags with semver versioning."]}),"\n",(0,i.jsx)("img",{src:"/img/github-flow.webp",width:"958",height:"241",className:"centerImg",alt:"Open Source Project Workflow on GitHub"}),"\n",(0,i.jsxs)(n.p,{children:["New and reopened ",(0,i.jsx)(n.code,{children:"pull request"})," are automatically added to the board in the ",(0,i.jsx)(n.code,{children:"In Progress"})," column."]}),"\n",(0,i.jsxs)(n.p,{children:["When the pull request is closed is moved to the ",(0,i.jsx)(n.code,{children:"Done"})," column automatically. If the pull request closes and issues it is properly stated with the GitHub keywords closes in the pull request it gets automatically moved to the ",(0,i.jsx)(n.code,{children:"Done"})," column too."]}),"\n",(0,i.jsx)(n.h2,{id:"branch-naming-convention",children:"Branch Naming Convention"}),"\n",(0,i.jsx)(n.p,{children:"Name every branch for your pull requests using the following simple convention:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<type>/<task-description>-<issue-number>\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Always use lowercase."}),"\n",(0,i.jsxs)(n.li,{children:["Choose the ",(0,i.jsx)(n.a,{href:"#type",children:"type"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Meaningful and short descriptions."}),"\n",(0,i.jsx)(n.li,{children:"Use hyphens as separators."}),"\n",(0,i.jsx)(n.li,{children:'Use the imperative, present tense: "change" not "changed" nor "changes".'}),"\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.code,{children:"issue"})," number to reference it in the branch."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["-",(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"feat/new-feature-123\n^--^ ^---------^ ^-^\n|    |           |\n|    |           +-> Issue number\n|    |\n|    +-> Short description of the task\n|\n+-> Type: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test, content, or devtools\n"})}),"\n",(0,i.jsx)(n.h2,{id:"pull-request-general-guidelines",children:"Pull Request General Guidelines"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Please check to make sure that there aren't existing ",(0,i.jsx)(n.code,{children:"pull request"})," attempting to address the ",(0,i.jsx)(n.code,{children:"issue"})," mentioned."]}),"\n",(0,i.jsxs)(n.li,{children:["Check for related ",(0,i.jsx)(n.code,{children:"issues"})," on the ",(0,i.jsx)(n.code,{children:"issue tracker"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Non-trivial changes should be discussed on an issue first."}),"\n",(0,i.jsxs)(n.li,{children:["Develop in a topic branch, never on master: ",(0,i.jsx)(n.code,{children:"git checkout -b type/task-issue"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Provide useful ",(0,i.jsx)(n.code,{children:"pull request"})," description."]}),"\n",(0,i.jsxs)(n.li,{children:["Make well scoped ",(0,i.jsx)(n.code,{children:"atomic"})," pull requests. 1 PR per feature of bug fix."]}),"\n",(0,i.jsxs)(n.li,{children:["Link the ",(0,i.jsx)(n.code,{children:"issue"})," on the ",(0,i.jsx)(n.code,{children:"pull request"})," description for cross references between code and issues."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We only support support ",(0,i.jsx)(n.strong,{children:"squash merge"})," of the ",(0,i.jsx)(n.code,{children:"pull requests"})," as a best practice for ensure the ",(0,i.jsx)(n.code,{children:"master"})," log is maintained clean and relevant, without requiring the pull request to be rebased. This strategy requires that all pull request made are ",(0,i.jsx)(n.code,{children:"atomic"}),", in other words they solve one thing only.  One pull request per feature, bug fix or documentation update."]}),"\n",(0,i.jsx)(n.h2,{id:"commit-message-guidelines",children:"Commit Message Guidelines"}),"\n",(0,i.jsxs)(n.p,{children:["We have very precise rules over how our ",(0,i.jsx)(n.code,{children:"git"})," commit messages can be formatted, following GitHub conventions and standards.  This leads to ",(0,i.jsx)(n.strong,{children:"more readable messages"})," that are easy to follow when looking through the ",(0,i.jsx)(n.strong,{children:"project history"}),".  But also, we use the ",(0,i.jsx)(n.code,{children:"git"})," commit messages to ",(0,i.jsx)(n.strong,{children:"generate the project change log"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"We follow the commit message conventions as shown below:"}),"\n",(0,i.jsx)(n.h3,{id:"commit-message-format",children:"Commit Message Format"}),"\n",(0,i.jsxs)(n.p,{children:["Each commit message consists of a ",(0,i.jsx)(n.strong,{children:"header"}),", a ",(0,i.jsx)(n.strong,{children:"body"})," and a ",(0,i.jsx)(n.strong,{children:"footer"}),".  The header has a special\nformat that includes a ",(0,i.jsx)(n.strong,{children:"type"}),", a ",(0,i.jsx)(n.strong,{children:"scope"})," and a ",(0,i.jsx)(n.strong,{children:"subject"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"header"})," is mandatory and the ",(0,i.jsx)(n.code,{children:"scope"})," of the header is optional."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"feat(scope): subject\n^--^ ^---^   ^-----^\n|    |       |\n|    |       +-> description in present tense. \n|    |     \n|    +-> scope is usually the service worked on (webapp, hapi, hasura etc.)\n|\n+-> Type: build, ci, docs, feat, fix, perf, refactor, style, test, content, or devtools.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The commit message cannot be longer than 100 characters. This allows the message to be easy to read on GitHub as well as various ",(0,i.jsx)(n.code,{children:"git tools"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The footer should contain a ",(0,i.jsx)(n.a,{href:"https://help.github.com/articles/closing-issues-via-commit-messages/",children:"closing reference to an issue"})," if any."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"The commit message should look like the following examples:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"feat(webapp): add a new react component for logo\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docs(changelog): update changelog to beta.5\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ci(github): update build and deploy workflow\n\nThe version in our package.json gets copied to the one we publish, and users need the latest of these.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Even more ",(0,i.jsx)(n.a,{href:"https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit",children:"examples"})]}),"\n",(0,i.jsx)(n.h3,{id:"revert",children:"Revert"}),"\n",(0,i.jsxs)(n.p,{children:["If the commit reverts a previous commit, it should begin with ",(0,i.jsx)(n.code,{children:"revert: "}),", followed by the header of the reverted commit. In the body it should say: ",(0,i.jsx)(n.code,{children:"This reverts commit <hash>"}),", where the hash is the SHA of the commit being reverted."]}),"\n",(0,i.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"build"}),": Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"chore"}),": What a user would not see (changes to the build process, configuration, etc)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ci"}),": Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"docs"}),": Documentation only changes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"feat"}),": A new feature for the user."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"fix"}),": A bug fix for the user."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"perf"}),": A code change that improves performance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"refactor"}),": A code change that neither fixes a bug nor adds a feature (renaming a variable)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"revert"}),": Reverts a previous commit."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"style"}),": Changes that do not affect the meaning of the code (white space, formatting, missing semi-colons, etc)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"test"}),": Adding missing tests or correcting existing tests."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"content"}),": Adding or removing content."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"devtools"}),": Developer tooling related."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"scope",children:"Scope"}),"\n",(0,i.jsx)(n.p,{children:"The scope is the name of the component or service that it affects. Eg:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"common"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"smart-contracts"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"webapp"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"storage"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"graphql"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"frontend"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"demux"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"docker"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"subject",children:"Subject"}),"\n",(0,i.jsx)(n.p,{children:"The subject contains a succinct description of the change:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'use the imperative, present tense: "change" not "changed" nor "changes"'}),"\n",(0,i.jsx)(n.li,{children:"don't capitalize the first letter"}),"\n",(0,i.jsx)(n.li,{children:"no dot (.) at the end"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"body",children:"Body"}),"\n",(0,i.jsxs)(n.p,{children:["Just as in the ",(0,i.jsx)(n.strong,{children:"subject"}),', use the imperative, present tense: "change" not "changed" nor "changes".\nThe body should include the motivation for the change and contrast this with previous behavior.']}),"\n",(0,i.jsx)(n.h3,{id:"footer",children:"Footer"}),"\n",(0,i.jsxs)(n.p,{children:["The footer should contain any information about ",(0,i.jsx)(n.strong,{children:"Breaking Changes"})," and is also the place to\nreference GitHub ",(0,i.jsx)(n.code,{children:"issues"})," that this commit closes."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Breaking Changes"})," should start with the word ",(0,i.jsx)(n.code,{children:"BREAKING CHANGE:"})," with a space or two newlines. The rest of the commit message is then used for this."]}),"\n",(0,i.jsx)(n.h2,{id:"reporting-bugs",children:"Reporting Bugs"}),"\n",(0,i.jsxs)(n.p,{children:["Before submitting your ",(0,i.jsx)(n.code,{children:"issue"})," please check that you've completed the following steps:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Made sure you're on the latest version."}),"\n",(0,i.jsx)(n.li,{children:"Used the search feature to ensure that the bug hasn't been reported before."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Bug reports should contain the following information:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Summary: A brief description."}),"\n",(0,i.jsx)(n.li,{children:"Steps to reproduce: How did you encounter the bug? Instructions to reproduce it."}),"\n",(0,i.jsx)(n.li,{children:"Expected behavior: How did you expect it to behave?"}),"\n",(0,i.jsx)(n.li,{children:"Actual behavior: How did it actually behave?"}),"\n",(0,i.jsx)(n.li,{children:"References: Links to any related tickets or information sources."}),"\n",(0,i.jsx)(n.li,{children:"If possible, attach visual documentation of the bug. Screenshot or animated gif."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"releases",children:"Releases"}),"\n",(0,i.jsxs)(n.p,{children:["We release the production software version using github tags following ",(0,i.jsx)(n.a,{href:"http://semver.org",children:"Semver"}),', except the version roles have the semantic names, "Breaking.Feature.Fix" instead of "Major.Minor.Patch".']}),"\n",(0,i.jsx)(n.h4,{id:"breakingfeaturefix",children:"Breaking.Feature.Fix"}),"\n",(0,i.jsx)(n.p,{children:"We don't decide what the version will be. The API changes decide. Version numbers are for computers, not people. Release names are for people."}),"\n",(0,i.jsx)(n.h5,{id:"breaking",children:"Breaking"}),"\n",(0,i.jsx)(n.p,{children:"Any breaking change, no matter how small increments the Breaking version number. Incrementing the Breaking version number has absolutely no relationship with issuing a release."}),"\n",(0,i.jsx)(n.h5,{id:"feature",children:"Feature"}),"\n",(0,i.jsx)(n.p,{children:"When any new feature is added. This could be as small as a new public property, or as large as a new module contract being exposed."}),"\n",(0,i.jsx)(n.h5,{id:"fix",children:"Fix"}),"\n",(0,i.jsx)(n.p,{children:"When a documented feature does not behave as documented, or when a security issue is discovered and fixed without altering documented behavior."}),"\n",(0,i.jsx)(n.h3,{id:"changelog-generation",children:"Changelog Generation"}),"\n",(0,i.jsxs)(n.p,{children:["On each release we generate a changelog file to document changes using the standard ",(0,i.jsx)(n.a,{href:"https://github.com/rafinskipg/git-changelog",children:"git-changelog"})," package. There's an npm task for it."]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-git-tools",children:"Advanced Git Tools"}),"\n",(0,i.jsxs)(n.p,{children:["There are also tools like ",(0,i.jsx)(n.a,{href:"https://hub.github.com/",children:"Hub"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/tj/git-extras",children:"git-extras"})," that facilitate interacting with Github. You can leverage these tools to contribute to this repository."]}),"\n",(0,i.jsx)(n.h2,{id:"code-standards",children:"Code Standards"}),"\n",(0,i.jsxs)(n.p,{children:["We use the ",(0,i.jsx)(n.a,{href:"https://standardjs.com",children:"standardjs code style"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"continuous-integration-and-delivery",children:"Continuous Integration and Delivery"}),"\n",(0,i.jsx)(n.p,{children:"We will use github actions for CI/CD deployments."}),"\n",(0,i.jsx)(n.h2,{id:"pre-commit-hooks",children:"Pre-commit Hooks"}),"\n",(0,i.jsx)(n.p,{children:"We use pre-commit hooks to ensure that both the code standards and commit message conventions are met."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(7294);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);