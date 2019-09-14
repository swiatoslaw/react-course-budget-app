import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";
import moment from "moment";

test("should generate set start date action option", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
});

test("should generate set end date action option", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});

test("should generate set sortByAmount action option", () => expect(sortByAmount()).toEqual({type: "SORT_BY_AMOUNT"}));

test("should generate set sortByDate action option", () => expect(sortByDate()).toEqual({type: "SORT_BY_DATE"}));

test("should generate set test filter action option with provided data", () => {
    const text = "Something in";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    })
});

test("should generate set test filter action option with default data", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
});