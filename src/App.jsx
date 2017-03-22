

const contentNode = document.getElementById('contents');

const issues = [
    {
        id: 1, status: 'Open', owner: 'Ravan',
        created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2, status: 'Assigned', owner: 'Eddie',
        created: new Date('2016-08-16'), effort: 14,
        completionDate: new Date('2016-08-30'),
        title: 'Missing bottom border on panel',
    },
];

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the Issue Filter.</div>
        )
    }
}


class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        console.log("render() for " + this.className + " has fired");
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
                <td>{issue.title}</td>
            </tr>
        )
    }
}
class IssueTable extends React.Component {
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 6 };
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Completion Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>{issueRows}</tbody>
            </table>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for an Issue Add entry form.</div>
        )
    }
}

class IssueList extends React.Component {

    /**
     * Constructor
     */
    constructor() {
        super();
        /** empty state. Will initialize later */
        this.state = { issues: [] };
        this.createTestIssue = this.createTestIssue.bind(this);
        setTimeout(this.createTestIssue, 2000);
    }

    /**
     * Hook method. Fires after component is ready
     */
    componentDidMount() {
        this.loadData();
    }

    loadData() {
        setTimeout( () => { this.setState({ issues: issues });}, 500);
    }

    createNewIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({ issues : newIssues });
    }

    createTestIssue() {
        this.createNewIssue({
            status: 'New', owner: 'Pieta', created: new Date(),
            title: 'Compleation date should be optional',
        });
    }
 
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={this.state.issues} />
                <button onClick={this.createTestIssue}>Add</button>
                <hr />
                <IssueAdd />
            </div>
        );
    }
}

ReactDOM.render(<IssueList />, contentNode);