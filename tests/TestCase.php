<?php

namespace Tests;

use Database\Seeders\RoleSeeder;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    /**
     * The seeder to run once per test case.
     * 
     * @var string
     */
    protected string $seeder = RoleSeeder::class;
}
