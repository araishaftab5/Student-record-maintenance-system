-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2020 at 06:35 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `courseid` int(100) NOT NULL,
  `branch` varchar(100) NOT NULL,
  `coursename` varchar(100) NOT NULL,
  `credits` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`courseid`, `branch`, `coursename`, `credits`) VALUES
(1, 'CSE', 'Data Structures', 4),
(2, 'CE', 'Strength of Material', 4),
(3, 'CHE', 'Numerical Measurements', 3),
(4, 'ECE', 'Digital and Analog Electronics', 4),
(5, 'IT', 'Introduction to Algorithms', 4),
(6, 'CSE', 'Introduction to Algorithms', 4),
(7, 'ECE', 'Microprocessors', 3),
(8, 'IT', 'Data Structures and Algorithms', 3),
(9, 'CE', 'Agriculture', 3),
(10, 'CHE', 'Water ', 4),
(11, 'CSE', 'Operating Systems', 3);

-- --------------------------------------------------------

--
-- Table structure for table `grade`
--

CREATE TABLE `grade` (
  `studentid` int(100) NOT NULL,
  `courseid` int(100) NOT NULL,
  `grade` varchar(100) NOT NULL,
  `gradeid` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grade`
--

INSERT INTO `grade` (`studentid`, `courseid`, `grade`, `gradeid`) VALUES
(10, 1, 'A+', 1),
(12, 2, 'A', 2),
(12, 9, 'B+', 3),
(10, 6, 'A+', 4),
(10, 11, 'A+', 5),
(13, 3, 'A+', 6),
(13, 10, 'B', 7),
(14, 5, 'A+', 8),
(14, 8, 'A', 9),
(18, 4, 'B', 10),
(18, 7, 'A', 11);

-- --------------------------------------------------------

--
-- Table structure for table `studentdata`
--

CREATE TABLE `studentdata` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `batch` int(100) NOT NULL,
  `branch` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `studentdata`
--

INSERT INTO `studentdata` (`id`, `name`, `email`, `batch`, `branch`, `contact`) VALUES
(10, 'Araish Aftab', 'araishaftab5@gmail.com', 2020, 'CSE', '9430990025'),
(12, 'Makrand', 'makrandjha@gmail.com', 2020, 'CE', '7564321023'),
(13, 'Trilok', 'trilokpatil11@gmail.com', 2019, 'CHE', '8319232611'),
(14, 'Shruti', 'sjagwani@gmail.com', 2019, 'IT', '7654323456'),
(18, 'Shivani', 'shivani8@gmail.com', 2020, 'ECE', '9430990023'),
(19, 'Sonal Priya', 'sonal11@gmail.com', 2019, 'CSE', '8965743215');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`courseid`);

--
-- Indexes for table `grade`
--
ALTER TABLE `grade`
  ADD PRIMARY KEY (`gradeid`);

--
-- Indexes for table `studentdata`
--
ALTER TABLE `studentdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `courseid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `grade`
--
ALTER TABLE `grade`
  MODIFY `gradeid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `studentdata`
--
ALTER TABLE `studentdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
