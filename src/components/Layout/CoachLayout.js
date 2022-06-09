import React from "react";
import classes from "./css/CoachLayout.module.css";
import { busSeats } from "../../utils/data";

function CoachLayout() {
  return (
    <div className={classes.coach_layout}>
      <div className={classes.coach_header}>
        <span>
          <img
            alt="handle image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOJSURBVHgBjZa7dtpAEIYlcJPKSpcO4Rcw6dL59gA2XTrbXVxhl6ksqpTgKiXiCWKqpLLkKukMZSrEG0CXFLbzf8ssR4cYjM6Zo53Z2fnntiOFwQbPvp5KpdLQsiaKRFPR5OnpaZjree18uMZwJMMtLS+fn5+HYRiOZLSQbKo3e7Hke5IDmkvWFl6xMYgAWjKSaHmjw10dngarnYkFlIj2xLbv7u7SV0EODw878vBEdOA9s3Qda4n3kTsYhkM5MPDpMrBMlAqovRJEANclgKkZ74kvRAOpAOqjalSr1WPJYx8BKTagXPzVfyACONMBQN4DYIDIztcVF0dktOcjMKAH0Y347gKEUOVxpvBdigCQ+FJ8fV09SkA0woOWHgh7D/58aFH0eEvh3EdEWuRNbJ01tVTNSra3RXjdIGXoWc1c5LKTmM1kyztDFLa+1sG++FQHMN6wYuNd5BG0PxE/enx8vDEHAvGcxeE6XSl+rHWyRU4xRppsTefsWvi36/rfUtWQ/jciQh9b2CGao6OjoWsePJXCvXlyYgVrit5KdA+YlE9KRmO/Rq59AO7JP+kWSB877Gs9YlJUuLk+XCJgVHgjtKX4ppR7VrsOKeBtRjqkmbz7BlFbF9bWpLRwabZ8r+wga19amrl1Jjrn7SNaTqVqhK1ty4xbV6xzIvNssV56Ynk1E11J/1R82xyLaN9gxcOM02u2ZUMvNvmktA4sRbR0bulIjdxDYS3/aekINR5ZJNgqKPxQRnYNme44XnKIm+9mEV7vz5/YUoP8uhwNowY7rBma1LiCi7Qfipb/GCsWBQVGnNOqFF26FD+DN/0B98Oc4L7Fpk+Knc0qm/V6/Y0OfxiPx3kcx7RdT7JIEXwUNSV7J9l3HfqsMxe1Wm0m/qvefVIpE92dnR1uf0LURVEMxXfEF7I5qFiaGGQt0M27vogDTWphnjLW02AeWuojYB899DnHHnYkIyqXZheJkP/I879Cdt5lWfZDvNjwizya6MAn0YX0Fq0uvV9MXu3/tlHCJU5sWP4kIj+9l78nXYqlgh7YuHfD0j6xbX9RVdzILlyLMeSHIgDay/j2AOjtvvRlZPPUj31fUBs5rgvtPvEjcVv+MtIQpFEAl2WbL37jSxHkGwzIxQ9HMP9Cdpd11v2tuB8ELfcYD9ZFk8BuuqgmWcOm79ofjpUgS4D7ejXsBjOXZjb8Nvrv+gdbw7CIvBnv4wAAAABJRU5ErkJggg=="
          />
        </span>
      </div>
      <div>
        <table className={classes.table}>
          <tbody>
            {/* {

              } */}
            <tr>
              {busSeats.map((elem, i) => (
                <td>{elem.name}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoachLayout;
